import { H1 } from '@/components/typography/typography'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Agency | Portfolio',
}

const Portfolio = () => {
  return (
    <div className="container">
      <H1>Choose a category</H1>
      <div className="mt-8 flex flex-wrap gap-12">
        <Link
          href="/portfolio/designs"
          className="group relative aspect-[4/5] w-[250px] rounded border-4 border-white bg-[url('/img/designs.png')] bg-cover font-bold duration-300 hover:border-green-300"
        >
          <span className="absolute bottom-3 right-3 text-3xl duration-300 group-hover:text-green-500">
            Designs
          </span>
        </Link>
        <Link
          href="/portfolio/websites"
          className="group relative aspect-[4/5] w-[250px] rounded border-4 border-white bg-[url('/img/websites.jpg')] bg-cover font-bold duration-300 hover:border-green-300"
        >
          <span className="absolute bottom-3 right-3 text-3xl duration-300 group-hover:text-green-500">
            Websites
          </span>
        </Link>
        <Link
          href="/portfolio/apps"
          className="group relative aspect-[4/5] w-[250px] rounded border-4 border-white bg-[url('/img/apps.jpg')] bg-cover font-bold duration-300 hover:border-green-300"
        >
          <span className="absolute bottom-3 right-3 text-3xl duration-300 group-hover:text-green-500">
            Mobile apps
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
