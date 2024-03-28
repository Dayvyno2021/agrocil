import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  by:{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  message: { type: String },
  title: {type: String}
}, {
  timestamps: true
})

const MessageModel = mongoose.model('MessageModel', messageSchema);

export default MessageModel;