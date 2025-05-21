import mongoose, { Schema, Document } from 'mongoose';

export interface IPatient extends Document {
  name: string;
  email: string;
  passwordHash: string;
  phone?: string;
  gender?: 'male' | 'female' | 'other';
  dob?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PatientSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    phone: { type: String },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    dob: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model<IPatient>('Patient', PatientSchema);
