import mongoose, { Schema } from "mongoose";

export interface Guests extends mongoose.Document {
  name: string;
  surname: string;
  contact: number;
  attending: boolean;
  children?: number;
  allergies?: string;
  notes?: string;
}

const GuestSchema = new Schema<Guests>({
  name: {
    type: String,
    required: true,
  },
  surname: { type: String, required: true },
  contact: { type: Number, required: true, unique: true },
  attending: { type: Boolean, required: true },
  children: Number,
  allergies: String,
  notes: String,
});

const Guest =
  mongoose.models.Guest || mongoose.model<Guests>("Guest", GuestSchema);

export default Guest;
