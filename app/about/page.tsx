import ContainerWithHorizontalBorders from '@/components/container-with-horizontal-borders/container-with-horizontal-borders'
import { H1, H2, H3, List, Paragraph } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <ContainerWithHorizontalBorders>
      <main className="container ">
        <div className="relative mb-12 h-72">
          <Image
            src="/img/about.jpg"
            alt=""
            fill
            priority
            aria-hidden="true"
            className="-z-10 object-cover grayscale"
          />
          <div className="absolute inset-x-4 bottom-4 max-w-max bg-green-600 p-1">
            <H1>About us</H1>
            <H2>Get to know us better</H2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <section>
            <H3>Who we are?</H3>
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              facilis?
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              voluptatibus cum esse vitae blanditiis delectus, accusamus
              repudiandae debitis reprehenderit laboriosam.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nulla, voluptates nihil ea maiores nostrum aspernatur quae
              doloremque aliquid aut vitae quidem delectus laborum pariatur.
            </Paragraph>
          </section>
          <section>
            <H3>What we do?</H3>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              consequatur neque sint unde exercitationem harum ut libero
              voluptates. Doloribus, nam!
            </Paragraph>
            <List>
              <li>Creative Designs</li>
              <li>Websites</li>
              <li>Mobile Apps</li>
            </List>
            <Button
              asChild
              className="bg-gradient-to-r from-green-500"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </section>
        </div>
      </main>
    </ContainerWithHorizontalBorders>
  )
}

export default About
