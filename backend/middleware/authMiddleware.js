import jwt from "jsonwebtoken"
import UserModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await UserModel.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export const adminProtect = async(req, res, next) =>{
  try {
    if (req.user && req.user.isAdmin) {
      next();
    } else{
      res.status(400).json({message: 'Unauthorized User(only admins)'})
    }
    
  } catch (error) {
    const m = process.env.NODE_ENV === 'production'? null : error
    res.status(404).json({message: `Server Error===> ${m}`})
  }
}