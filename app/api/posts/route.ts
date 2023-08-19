import connect from '@/lib/db'
import Post from '@/models/Post'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  const url = new URL(request.url)
  const username = url.searchParams.get('username')

  try {
    await connect()

    const posts = await Post.find({ username })

    return NextResponse.json({ posts, status: 200 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

export const POST = async (request: Request) => {
  const body = await request.json()
  const newPost = new Post(body)

  try {
    await connect()

    await newPost.save()

    return new NextResponse('Post has been created', { status: 201 })
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
