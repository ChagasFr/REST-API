import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, required: true },
    sessionToken: { type: String, required: true },
  },
});

export const UserModel = mongoose.model("User", UserSchema);

export const gerUser = () => UserModel.find();
export const gerUserByEmail = (email: string) => UserModel.findOne({ email });
export const gerUserByEmailToken = (email: string) =>
  UserModel.findOne({ email });
