import UserModel from '../models/userModel.js';
import { generateToken } from '../config/generateToken.js';
import fs from 'fs';
import InvestmentModel from '../models/investmentModel.js';
import nodemailer from "nodemailer";
import {randomBytes} from 'node:crypto';

export const register = async (req, res) => {
  try {
    const { username, email, psw, refCode, phone, firstname, lastname } = req.body;

    const findRefCode = () => {     
      const usernameRef = username.substr(-3, 3).toLowerCase();
      const randRef = Math.floor(Math.random() * 10000000000);
      const ref = `${usernameRef}${randRef}`;
      return ref;   
    }
    const referral = findRefCode();

    if (!username || !email || !psw || !phone || !firstname || !lastname) {
      res.status(400).json({
        message: 'All Fields except refCode are required'
      })
    } else {

      const refPerson = await UserModel.findOne({ refCode: refCode });
      if (refCode && !refPerson) return res.status(400).json({message: 'Referral does not exist'})

      const existRefCode = await UserModel.findOne({ refCode: referral });
      const existEmail = await UserModel.findOne({ email });
      const existUsername = await UserModel.findOne({name:username})
      if (existRefCode) return res.status(400).json({ message: 'Could not register, try again' });
      if (existEmail || existUsername) return res.status(400).json({ message: 'Username or Email already exists' });

      const newPerson = await UserModel.create({
        name: username,
        email,
        password: psw,
        refCode: referral,
        refBy: refCode.toLowerCase(),
        phone,
        firstname,
        lastname
        // isAdmin: true
      })

      const newRef = await UserModel.findOne({ refCode: refCode });
      if (newRef) {
        const notify = {notice: "You have a new downline", user: newRef._id}
        console.log("WE DYE HERE, I DON TRY")
        newRef.notification.push(notify);
        await newRef.save();
      }

      if (newPerson) {
        const notify = {
          notice: 'Thank you for joining ACIL. You sleep while your money works for you',
          user: newPerson._id
        }
        newPerson.notification.push(notify);
        const newUser = await newPerson.save();
        
        if (newUser) {
          return res.json({
            id: newUser && newUser._id,
            username: newUser && newUser.name,
            refCode: newUser && newUser.refCode,
            email: newUser && newUser.email,
            phone: newUser && newUser.phone,
            isAdmin: newUser && newUser.isAdmin,
            refBy: newUser && newUser.refBy,
            account: newUser && newUser.account,
            fullname: newUser && newUser.fullname,
            bank: newUser && newUser.bank,
            updatedAt: newUser && newUser.updatedAt,
            createdAt: newUser && newUser.createdAt,
            notification: newUser && newUser.notification,
            token: newUser && generateToken(newUser._id),
            firstname: newUser && newUser.firstname,
            lastname: newUser && newUser.lastname,
          })
        }else{res.status(400).json({message: "Could not add notification"})}
      } else {
        res.status(400).json({message: "Could not register new user"})
      }
    }
  } catch (error) {
    const m = process.env.NODE_ENV === 'production' ? '' : error;
    res.status(404).json({
      message: `Server Error===>${m}`
    })
  }
}

//desc: login new user;
//route: post /api/user/login;
//access: public;

export const login = async (req, res) => {
  try {
    const { user, password } = req.body;
    const userEm = await UserModel.findOne({ email:user });
    const userNm = await UserModel.findOne({ name: user });
    const userA = userEm || userNm;
    if (userA) {
      const auth = await userA.matchPassword(password);
      if (auth) {
        return res.json({
          id: userA && userA._id,
          username: userA && userA.name,
          refCode: userA && userA.refCode,
          email: userA && userA.email,
          phone: userA && userA.phone,
          isAdmin: userA && userA.isAdmin,
          refBy: userA && userA.refBy,
          token: userA && generateToken(userA._id),         
          account: userA && userA.account,
          fullname: userA && userA.fullname,
          bank: userA && userA.bank,
          notification: userA && userA.notification,
          updatedAt: userA && userA.updatedAt,
          createdAt: userA && userA.createdAt,
          firstname: userA && userA.firstname,
          lastname: userA && userA.lastname,
        })
      } 
      return res.status(400).json({message: 'Username or Email or password does not match'})
    } else {
      res.status(400).json({message: "User does not exist"})
    }
    
  } catch (error) {
    const m = process.env.NODE_ENV === 'production' ? '' : error;
    res.status(404).json({
      message: `Server Error===> ${m}`
    })
  }
}

//desc: get profile;
//route: /api/user/profile/:id
//access protected

export const profile = async (req, res) => {
  try {
    // const {id} = req.params
    const user = await UserModel.findById(req.params && req.params.id).select('-password -pics')
    if (user) {
      res.json(user);
    } else {
      res.status(400).json({message: 'Unauthorized user'})
    }
    
  } catch (error) {
    const m = process.env.NODE_ENV === 'production' ? '' : error;
    res.status(404).json({
      message: `Server Error===>${m}`
    })
  }
}

//desc: post image image
//route: /api/user/imageform
//access: private

export const profileImage = async (req, res) => {
  try {
    const files = req.files;
    const fields = req.fields;
    // console.log(files)
    // return res.status(400).json({message: 'failed'})
    const investor = await UserModel.findById(req.user._id);
    if ((files && files.image && files.image.size) > 220000){
      return res.status(400).json({message: 'Max image size=200kb'})
    } else{
      if (files && files.image) {
        investor.pic.data = fs.readFileSync(files.image.path);
        investor.pic.contentType = files.image.type;
        await investor.save();
        return res.json('successful')
      } else{
        return res.status(400).json({message: 'Could not upload image, refresh and try again'})
      }
    } 

    
  } catch (error) {
    const m = process.env.NODE_ENV === 'production' ? '' : error;
    res.status(404).json({
      message: `Server Error===>${m}`
    })
  }
}


//@desc get img
//@route get /api/
//@access private

export const userImage = async(req, res)=>{
  try {
    const id  = req.params.id
    const profileImage = await UserModel.findById(id)
    if ((profileImage && profileImage.pic && profileImage.pic.data) !== null){
      res.set('Content-Type', profileImage.pic.contentType)
      res.send(profileImage.pic.data)
    } else{
      res.status(400).json({message: 'Could not find image'})
    }
    
    
  } catch (error) {
    const m = process.env.NODE_ENV==='production'? null: error
    res.status(404).json({message: `Server Down===> ${m}`})
  }
}

export const imageConfirm = async(req, res)=>{
  try {
    const id = req.user._id;
    const profileImage = await UserModel.findById(id)
    if (profileImage && profileImage.pic && profileImage.pic.data){
      res.json('Yes')
    } else{
      res.json('No')
    }
    
    
  } catch (error) {
    const m = process.env.NODE_ENV==='production'? null: error
    res.status(404).json({message: `Server Down===> ${m}`})
  }
}

// @desc get downlines
// @route get /api/user/downlines
//@access private

export const downlines = async (req, res) => {
  try {
    const dline = await UserModel.find({ refCode: req.user && req.user.refCode });
    if (dline) {
      res.json(dline);
    } else {
      res.status(400).json({message: 'No downlines'})
    }
  } catch (error) {
    const m = process.env.NODE_ENV==='production'? null: error
    res.status(404).json({message: `Server Down===> ${m}`})
  }
}

//@desc: Update user profile;
//@route: put /api/user/update;
//@access private;

export const updateUser = async (req, res) => {
  try {
    const { psw, phone, firstname, lastname, account, bank } = req.body;
    const id = req.params && req.params.id
    const user = await UserModel.findById(id);
    if (user) {
      user.phone = phone || user.phone;
      user.account = account || user.account;
      user.firstname = firstname || user.firstname;
      user.lastname = lastname || user.lastname;
      user.bank = bank || user.bank;
      if (psw) {
        user.password = psw;
      }
      await user.save();

      res.json({
        id: user && user._id,
        username: user && user.name,
        refCode: user && user.refCode,
        email: user && user.email,
        phone: user && user.phone,
        isAdmin: user && user.isAdmin,
        refBy: user && user.refBy,
        account: user && user.account,
        fullname: user && user.fullname,
        bank: user && user.bank,
        notification: user && user.notification,
        updatedAt: user && user.updatedAt,
        createdAt: user && user.createdAt,
        token: user && generateToken(user._id),
        firstname: user && user.firstname,
        lastname: user && user.lastname,
      })
    } else {
      res.status(400).json({message: "Could not find user"})
    }
    
  } catch (error) {
    const m = process.env.NODE_ENV==='production'? null: error
    res.status(404).json({message: `Server Down===> ${m}`})
  }
}

//@desc: get all investors
//@route: /api/user/allinvestors;
//access: protect, adminProtect;

export const getAllInvestors = async (req, res) => {
  try {
    const { user, start, end } = req.query;
    // console.log({ user, start, end })
    
    const searchInvestors = user ? { name: { $regex: user, $options: 'i' } } : {};
    const searchDate = start && end ? { createdAt: { $gte: start, $lte: end } } : {};

    const users = await UserModel.find({...searchInvestors, ...searchDate})
      .select('-password -pic')
      .sort({createdAt: -1});
    if (users) {
      res.json(users);
    } else {
      res.status(400).json({message: "Could not find users"})
    }
  } catch (error) {
    const m = process.env.NODE_ENV==='production'? null: error
    res.status(404).json({message: `Server Down===> ${m}`})
  }
}

//@desc: Admin makes a user an admin
//route: /api/user/make-user-an-admin/:id
//@access admin , protected

export const makeAdmin = async (req, res) => {
  try {
    const { status } = req.body;
    // console.log(`STATUS: ${status}`)
    // console.log(`PARAMS: ${req.params && req.params.id}`)
    const id = req.params && req.params.id;
    const user = await UserModel.findById(id);
    if (user) {
      user.isAdmin = status;
      await user.save();
      res.json('Successful')
    } else {
      res.status(400).json({ message: 'Could not find user' });
    }

  } catch (error) {
    const m = process.env.NODE_ENV==='production'? null: error
    res.status(404).json({message: `Server Down===> ${m}`})
  }
}

//@desc: Admin deletes a user
//route: del /api/user/admin-deletes-user/:id
//@access admin , protected

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const del = await UserModel.findByIdAndDelete(id);
    if (del) {
      res.json('Deleted Successfully');
    } else {
      res.status(400).json({message: "Could not delete user"})
    }
    
  } catch (error) {
    const m = process.env.NODE_ENV==='production'? null: error
    res.status(404).json({message: `Server Down===> ${m}`})
  }
}

//@desc: Fetches the profile of an investor
//@route: GET /api/user/my-profile;
//@access: protect

export const myProfile = async (req, res) => {
  try {
    const profile = await UserModel.findById(req.user && req.user._id);
    if (profile) {
      res.json({
            id: profile && profile._id,
            username: profile && profile.name,
            refCode: profile && profile.refCode,
            email: profile && profile.email,
            phone: profile && profile.phone,
            isAdmin: profile && profile.isAdmin,
            refBy: profile && profile.refBy,
            account: profile && profile.account,
            fullname: profile && profile.fullname,
            bank: profile && profile.bank,
            updatedAt: profile && profile.updatedAt,
            createdAt: profile && profile.createdAt,
            notification: profile && profile.notification,
            token: profile && generateToken(profile._id),
            firstname: profile && profile.firstname,
            lastname: profile && profile.lastname,
      })
    } else {
      res.status(400).json({message: "Could not fetch user profile"})
    }
    
  } catch (error) {
    const m = process.env.NODE_ENV==='production'? null: error
    res.status(404).json({message: `Server Down===> ${m}`})
  }
}

//@desc: Delete a particular notification;
//@route: delete /api/user/my-model/:id
//@access: protect;

export const deleteNotification = async (req, res) => {
  try {

    const d = await UserModel.updateMany(
      {},
      { $pull: { notification: { _id: req.params.id } } }
    );

    
    if (d) {
      const updated = await UserModel.findById(req.user && req.user._id);
      if (updated) {
        res.json({
            id: updated && updated._id,
            username: updated && updated.name,
            refCode: updated && updated.refCode,
            email: updated && updated.email,
            phone: updated && updated.phone,
            isAdmin: updated && updated.isAdmin,
            refBy: updated && updated.refBy,
            account: updated && updated.account,
            fullname: updated && updated.fullname,
            bank: updated && updated.bank,
            updatedAt: updated && updated.updatedAt,
            createdAt: updated && updated.createdAt,
            notification: updated && updated.notification,
            token: updated && generateToken(updated._id),
            firstname: updated && updated.firstname,
            lastname: updated && updated.lastname,
        })
        
      } else{res.json({message: "Could not update users"})}
    } else {
      res.status(400).json({message: "Could not delete notification"})
    }



  } catch (error) {
    const m = process.env.NODE_ENV==='production'? null: error
    res.status(404).json({message: `Server Down===> ${m}`})
  }
}

//@desc: Send withdrawal notice to admin
//@route: get /api/user/make-request/:id
//access private

export const withdrawalRequest = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await InvestmentModel.findById(orderId).populate('investor', 'name');
    const username = order && order.investor && order.investor.name;
    const userId = order && order.investor && order.investor._id;
    const notify = { notice: `${username}\'s with orderID: ${orderId} is due for payment`, user: userId };


    const allAdmins = await UserModel.find({ isAdmin: true });
    if (allAdmins) {
      const all = allAdmins && allAdmins.map(async(admin) => {
        admin && admin.notification && admin.notification.push(notify);
        await admin.save();
      });

      res.json('successful');
    } else {
      res.status(400).json({ message: "Could not find any admin" });
    }

  } catch (error) {
    const m = process.env.NODE_ENV==='production'? null: error
    res.status(404).json({message: `Server Down===> ${m}`})
  }
}

// Desc: send forget password email notification
// route: post /api/user/forget-password
//access: public

export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const emE = await UserModel.findOne({email});
    if (!email) return res.status(400).json({ message: 'form can not be empty' });

    if (emE) {
      randomBytes(256, async (err, buf) => {
      if (err) return res.status(400).json({message: 'crypto error'});
        const bufToken = buf.toString('hex');
        emE.fgToken = bufToken;
        emE.fgDate = Date.now() + 3600000;
        await emE.save()

        // let testAccount = await nodemailer.createTestAccount();
        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: process.env.USER,
            pass: process.env.PASS
          }
        })

        let info = await transporter.sendMail({
          from: "ACIL reset password",
          to: email,
          subject: 'ACIL password Reset',
          html: 
          `
            <p>You are receiving this email because you(or someone else) have requested the reset of the password for your account</p>
            <p>https://agrocil.com/reset-password/?buf=${bufToken}&mail=${email}</p>
        `
        })
        res.json('Password recovery email successfuly sent')
      });
    } else {
      res.status(400).json({message: 'Cannot find email'})
    }

    
  } catch (error) {
    const m = process.env.NODE_ENV === 'production' ? null : error;
    res.status(404).json({ message: `Server Error===>${m}` });
  }
}

//Desc: Reset password
//route: /api/user/reset-password
//access: public

export const resetPassword = async (req, res) => {
  try {
    const { buf, mail, psw } = req.body;
    // console.log(buf);
    // res.json(mail)
    if (!buf || !mail) res.status(400).json({ message: 'Invalid request' })
    const user = await UserModel.findOne({ email: mail });
    if (user) {
      if (user.fgToken === buf && user.fgDate>Date.now()) {
        user.password = psw;
        await user.save();
        res.json('Password successfully changed!')
      } else {
        res.status(400).json({message: 'Invalid token'})
      }
    } else {
      res.status(400).json({message: 'Email not recognised, please register'})
    }
    
  } catch (error) {
    const m = process.env.NODE_ENV === 'production' ? '' : error;
    res.status(404).json({message: `Server Error===>${m}`})
  }
}

//desc: Send info to individual user
//route: /api/user/info
//access: protect, adminProtect

export const info = async (req, res) => {
  try {
    const userId = req.params.id;
    const { info } = req.body;
    const comment = {
      notice: info,
      user: req.user._id
    }
    const user = await UserModel.findById(userId);
    if (user) {
      user.notification.push(comment);
      await user.save();
      res.json('Successful');
    } else {
      res.status(404).json({message: 'Could not find user'})
    }
  } catch (error) {
    const m = process.env.NODE_ENV === 'production' ? '' : error;
    res.status(404).json({message: `Server Error===>${m}`})
  }
}