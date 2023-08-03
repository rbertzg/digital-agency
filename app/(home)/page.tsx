import ContainerWithHorizontalBorders from '@/components/container-with-horizontal-borders/container-with-horizontal-borders'
import { H1 } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import hero from 'public/img/hero.png'

const Home = () => {
  return (
    <ContainerWithHorizontalBorders>
      <main className="container flex items-center gap-12">
        <div className="flex flex-col items-start gap-6">
          <H1>Transforming Ideas into Digital Reality</H1>
          <p className="max-w-prose text-lg">
            Discover the limitless potential of bringing your visionary ideas to
            life in the digital realm with our transformative website solutions
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-green-500"
          >
            <Link href="/portfolio">See our works</Link>
          </Button>
        </div>
        <Image
          src={hero}
          alt="Hero image"
          height={500}
        />
      </main>
    </ContainerWithHorizontalBorders>
  )
}

export default Home
