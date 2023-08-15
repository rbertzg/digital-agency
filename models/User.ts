import mongoose, { Schema } from 'mongoose'

export type UserType = {
  _id: string
  createdAt: NativeDate
  updatedAt: NativeDate
  name: string
  email: string
  password: string
}

const userSchema = new Schema<UserType>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', userSchema)
