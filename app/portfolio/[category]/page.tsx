import { H3, Paragraph } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

type PortfolioCategoryProps = {
  params: {
    category: string
  }
}

const PortfolioCategory = ({ params }: PortfolioCategoryProps) => {
  return (
    <div className="container">
      <span className="text-3xl font-extrabold capitalize tracking-tight text-green-600 lg:text-4xl">
        {params.category}
      </span>
      <div className="mt-12 flex items-center gap-12 odd:flex-row-reverse">
        <div className="basis-1/2 space-y-6">
          <H3>Creative Designs</H3>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam
            sunt eos inventore recusandae voluptates molestiae ipsa enim ea
            provident necessitatibus ipsam perferendis, odit, ratione quaerat ut
            eveniet nihil animi?
          </Paragraph>
          <Button>See more</Button>
        </div>
        <div className="relative h-[500px] basis-1/2">
          <Image
            src="/img/designs.png"
            alt="design"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-12 flex items-center gap-12 odd:flex-row-reverse">
        <div className="basis-1/2 space-y-6">
          <H3>Quality Products</H3>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam
            sunt eos inventore recusandae voluptates molestiae ipsa enim ea
            provident necessitatibus ipsam perferendis, odit, ratione quaerat ut
            eveniet nihil animi?
          </Paragraph>
          <Button>See more</Button>
        </div>
        <div className="relative h-[500px] basis-1/2">
          <Image
            src="/img/websites.jpg"
            alt="design"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default PortfolioCategory
