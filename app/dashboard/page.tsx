'use client'

import { H1, Paragraph } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { PostType } from '@/models/Post'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useSWR, { Fetcher } from 'swr'
import NewPostForm from './_components/new-post-form'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  type ApiResponse = {
    posts: Omit<PostType, 'createdAt' | 'updatedAt'>[]
  }

  const fetcher: Fetcher<ApiResponse> = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json())

  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?username=${session.data?.user?.name}`,
    fetcher
  )

  const handleDelete = async (postId: string) => {
    try {
      await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === 'loading') {
    return (
      <div className="container flex justify-between gap-4">
        <Skeleton className="w-24 rounded-l-full" />
        <div className="flex w-full flex-col justify-between gap-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
        <Skeleton className="w-24 rounded-r-full" />
      </div>
    )
  }

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login')
  }

  if (session.status === 'authenticated') {
    return (
      <div className="container mt-12 flex justify-between gap-12">
        <ul className="space-y-6">
          {isLoading
            ? 'Loading...'
            : data?.posts.map((post) => (
                <li
                  key={post._id}
                  className="flex items-center gap-4"
                >
                  <Image
                    src={post.img}
                    alt=""
                    width={360}
                    height={160}
                    className="object-cover"
                  />
                  <div>
                    <H1>{post.title}</H1>
                    <Paragraph>{post.desc}</Paragraph>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="mt-6"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete post
                    </Button>
                  </div>
                </li>
              ))}
        </ul>
        <NewPostForm />
      </div>
    )
  }
}

export default Dashboard
