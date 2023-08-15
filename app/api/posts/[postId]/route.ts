import connect from '@/lib/db'
import Post from '@/models/Post'
import { NextResponse } from 'next/server'

type Params = {
  params: {
    postId: number
  }
}

export const GET = async (request: Request, { params }: Params) => {
  const { postId } = params

  try {
    await connect()

    const post = await Post.findById(postId)

    return NextResponse.json({ post, status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
