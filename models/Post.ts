import mongoose, { Schema } from 'mongoose'

export type PostType = {
  _id: string
  createdAt: NativeDate
  updatedAt: NativeDate
  title: string
  desc: string
  img: string
  content: string
  username: string
}

const postSchema = new Schema<PostType>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Post || mongoose.model('Post', postSchema)
