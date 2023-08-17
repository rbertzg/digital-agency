import connect from '@/lib/db'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

const authHandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'E-mail', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('No credentials provided')
        }

        await connect()

        try {
          const user = await User.findOne({
            email: credentials.email,
          })

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )

            if (isPasswordCorrect) {
              return user
            } else {
              throw new Error('Incorrect credentials')
            }
          } else {
            throw new Error('User not found')
          }
        } catch (error: any) {
          throw new Error(error)
        }
      },
    }),
  ],
  pages: {
    error: '/dashboard/login',
  },
})

export { authHandler as GET, authHandler as POST }
