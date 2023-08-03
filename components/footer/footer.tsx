import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Small } from '../typography/typography'

import facebook from 'public/img/facebook.png'
import instagram from 'public/img/instagram.png'
import twitter from 'public/img/twitter.png'
import youtube from 'public/img/youtube.png'

const socialLinks: {
  id: number
  img: StaticImageData
  alt: string
  href: string
}[] = [
  { id: 1, img: facebook, alt: 'Facebook logo', href: '/' },
  { id: 2, img: twitter, alt: 'Twitter logo', href: '/' },
  { id: 3, img: instagram, alt: 'Instagram logo', href: '/' },
  { id: 4, img: youtube, alt: 'YouTube logo', href: '/' },
]

const Footer = () => {
  return (
    <footer className="container flex h-16 items-center justify-between">
      <Small>2023 © Digital Agency</Small>
      <div className="flex items-center gap-2">
        {socialLinks.map(({ id, img, alt, href }) => (
          <Link
            key={id}
            href={href}
          >
            <Image
              src={img}
              alt={alt}
              width={20}
              height={20}
            />
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
