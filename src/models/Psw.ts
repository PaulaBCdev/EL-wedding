import mongoose, { Schema } from "mongoose";

export interface Psws extends mongoose.Document {
  psw: string;
}

const PasswordSchema = new Schema<Psws>({
  psw: String,
});

const Password =
  mongoose.models.Psw || mongoose.model<Psws>("Psw", PasswordSchema);

export default Password;
