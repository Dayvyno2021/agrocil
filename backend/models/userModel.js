import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const notify = mongoose.Schema({
  notice : {type: String},
  user: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}
},
{
  timestamps: true
})

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true, unique: true },
    email:{type:String, required: true, unique: true},
    refCode: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    firstname: { type: String },
    lastname: {type: String},
    phone: {type:String},
    notification: [notify],
    isAdmin: { type: Boolean, required: true, default: false },
    refBy: { type: String },
    fullname: { type: String },
    account: { type: String },
    bank:{type: String},
    pic: { data: Buffer, contentType: String },
    fgToken: { type: String },
    fgDate: { type: Date },
  }, {
  timestamps: true,
}
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;