import { H1, Paragraph } from '@/components/typography/typography'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <article className="container">
      <header className="flex gap-12">
        <div className="flex flex-1 flex-col justify-between">
          <H1>Post Title</H1>
          <Paragraph className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur necessitatibus ipsa porro, dignissimos soluta iste
            beatae facere? Eos, ratione nobis!
          </Paragraph>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src="/img/post.jpg"
                alt="author avatar"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>John Doe</span>
          </div>
        </div>
        <div className="relative h-[300px] flex-1">
          <Image
            src="/img/post.jpg"
            alt="post image"
            fill
            className="object-cover"
          />
        </div>
      </header>
      <div className="mt-12">
        <Paragraph className="text-justify text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus,
          nisi dolore dolor quam ratione inventore architecto minima at eveniet,
          magni perferendis qui odit expedita nobis animi perspiciatis
          dignissimos repellendus cum? Pariatur cumque asperiores, officia eaque
          fuga soluta, minima debitis unde suscipit molestias eos? Expedita
          commodi molestias quibusdam nobis! Eos.
        </Paragraph>
      </div>
    </article>
  )
}

export default BlogPost
