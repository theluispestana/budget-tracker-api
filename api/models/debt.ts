import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./user";

export interface IDebt extends Document {
  owner: IUser;
  name: string;
  amount: number;
  interest: number;
}

const DebtSchema: Schema = new Schema({
  owner: { type: Object, required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  interest: { type: Number, required: true },
});

export default mongoose.model<IDebt>("Debt", DebtSchema);
