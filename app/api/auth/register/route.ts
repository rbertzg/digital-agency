import connect from '@/lib/db'
import User, { UserType } from '@/models/User'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  await connect()

  const {
    name,
    password,
    email,
  }: Pick<UserType, 'name' | 'password' | 'email'> = await request.json()

  const encryptedPassword = await bcrypt.hash(password, 3)

  const newUser = new User({
    name,
    password: encryptedPassword,
    email,
  })

  try {
    await newUser.save()
    return new NextResponse('User has been created', { status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, { status: 500 })
    } else {
      return new NextResponse('An unknown error occurred', { status: 500 })
    }
  }
}
