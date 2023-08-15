import connect from '@/lib/db'
import Post from '@/models/Post'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  try {
    await connect()

    const posts = await Post.find()

    return NextResponse.json({ posts, status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
