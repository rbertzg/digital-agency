import ContainerWithHorizontalBorders from '@/components/container-with-horizontal-borders/container-with-horizontal-borders'
import { H1 } from '@/components/typography/typography'
import Image from 'next/image'
import ContactForm from './_components/contact-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Agency | Contact',
}

const Contact = () => {
  return (
    <ContainerWithHorizontalBorders>
      <div className="container">
        <H1>Let&apos;s stay in touch</H1>
        <div className="mt-12 grid grid-cols-2 gap-12">
          <div className="relative h-[500px]">
            <Image
              src="/img/contact.png"
              alt=""
              fill
              sizes="50vw"
              priority
              className="object-contain"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </ContainerWithHorizontalBorders>
  )
}

export default Contact
