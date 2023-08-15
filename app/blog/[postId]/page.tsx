import { H1, Paragraph } from '@/components/typography/typography'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PostType } from '@/models/Post'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const getPost = async (postId: number): Promise<PostType> => {
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  const data = await res.json()
  return data.post as PostType
}

type BlogPostProps = {
  params: {
    postId: number
  }
}

export const generateMetadata = async ({
  params,
}: BlogPostProps): Promise<Metadata> => {
  const post = await getPost(params.postId)
  const postTitle = post.title
  const capitalizedPostTitle = postTitle[0].toUpperCase() + postTitle.slice(1)

  return {
    title: `Digital Agency | ${capitalizedPostTitle}`,
  }
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const { postId } = params
  const post = await getPost(postId)

  return (
    <article className="container">
      <header className="flex gap-12">
        <div className="flex flex-1 flex-col justify-between">
          <H1>{post.title}</H1>
          <Paragraph className="text-gray-500">{post.desc}</Paragraph>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src="/img/post.jpg"
                alt="author avatar"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>{post.username}</span>
          </div>
        </div>
        <div className="relative h-[300px] flex-1">
          <Image
            src={post.img}
            alt="post image"
            fill
            className="object-cover"
          />
        </div>
      </header>
      <div className="mt-12">
        <Paragraph className="text-justify text-gray-500">
          {post.content}
        </Paragraph>
      </div>
    </article>
  )
}

export default BlogPost
