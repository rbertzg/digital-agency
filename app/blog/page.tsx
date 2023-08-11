import ContainerWithHorizontalBorders from '@/components/container-with-horizontal-borders/container-with-horizontal-borders'
import { H1, Paragraph } from '@/components/typography/typography'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <ContainerWithHorizontalBorders>
      <div className="container space-y-6">
        <Link
          href="/blog/postId"
          className="flex items-center gap-4"
        >
          <Image
            src="/img/post.jpg"
            alt=""
            width={400}
            height={250}
            className="shrink-0 object-cover"
          />
          <div>
            <H1>Post Title</H1>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              eius possimus fuga doloremque labore tempora nihil temporibus
              dicta pariatur quae?
            </Paragraph>
          </div>
        </Link>
        <Link
          href="/blog/postId"
          className="flex items-center gap-4"
        >
          <Image
            src="/img/post.jpg"
            alt=""
            width={400}
            height={250}
            className="shrink-0 object-cover"
          />
          <div>
            <H1>Post Title</H1>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              eius possimus fuga doloremque labore tempora nihil temporibus
              dicta pariatur quae?
            </Paragraph>
          </div>
        </Link>
        <Link
          href="/blog/postId"
          className="flex items-center gap-4"
        >
          <Image
            src="/img/post.jpg"
            alt=""
            width={400}
            height={250}
            className="shrink-0 object-cover"
          />
          <div>
            <H1>Post Title</H1>
            <Paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              eius possimus fuga doloremque labore tempora nihil temporibus
              dicta pariatur quae?
            </Paragraph>
          </div>
        </Link>
      </div>
    </ContainerWithHorizontalBorders>
  )
}

export default Blog
