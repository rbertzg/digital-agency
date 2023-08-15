import ContainerWithHorizontalBorders from '@/components/container-with-horizontal-borders/container-with-horizontal-borders'
import { H1, Paragraph } from '@/components/typography/typography'
import { PostType } from '@/models/Post'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const getPosts = async (): Promise<PostType[]> => {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  const data = await res.json()
  return data.posts as PostType[]
}

export const metadata: Metadata = {
  title: 'Digital Agency | Blog',
}

const Blog = async () => {
  const posts = await getPosts()

  return (
    <ContainerWithHorizontalBorders>
      <div className="container space-y-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._id}`}
            className="flex items-center gap-4"
          >
            <Image
              src={post.img}
              alt=""
              width={400}
              height={250}
              className="shrink-0 object-cover"
            />
            <div>
              <H1>{post.title}</H1>
              <Paragraph>{post.desc}</Paragraph>
            </div>
          </Link>
        ))}
      </div>
    </ContainerWithHorizontalBorders>
  )
}

export default Blog
