import MessageModel from "../models/messageModel.js";

//desc: Send Message to all users
//route: /api/message/send-message
//access: protect, adminProtect;

export const sendMessage = async (req, res) => {
  try {
    const { message, title } = req.body;
    if (!message) res.status(400).json({ message: 'Message can not be empty' });
    const deleted = await MessageModel.deleteMany();
    if (deleted) {
      await MessageModel.create({
        message,
        title,
        by: req.user._id
      })
      res.json('Message successful');
    } else {
      res.status(400).json({message: 'Message could not be sent'})
    }

  } catch (error) {
    const m = process.env.NODE_ENV === 'production' ? '' : error;
    res.status(404).json({
      message: `Server Error===>${m}`
    })
  }
}

// desc: get message
//route: /api/message/get-message
//access: private

export const getMessage = async (req, res) => {
  try {
    // const message = await MessageModel.find()[0];
    const message = await MessageModel.find({}).populate('by', 'name');
    if (message) {
      res.json(message[0]);
    } else {
      res.json(null)
    }
    
  } catch (error) {
    const m = process.env.NODE_ENV === 'production' ? '' : error;
    res.status(404).json({
      message: `Server Error===>${m}`
    })
  }
}

//desc: delete everything in the message collection
//route: /api/message/delete
//access: protected, adminProtected

export const deleteMessage = async (req, res) => {
  try {
    await MessageModel.deleteMany({});
    res.json('deleted')
    
  } catch (error) {
    const m = process.env.NODE_ENV === 'production' ? '' : error;
    res.status(404).json({
      message: `Server error===>${m}`
    })
  }
}