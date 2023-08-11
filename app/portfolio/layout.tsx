import ContainerWithHorizontalBorders from '@/components/container-with-horizontal-borders/container-with-horizontal-borders'
import { H1 } from '@/components/typography/typography'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="container mb-5">
        <H1>Our Works</H1>
      </div>
      <ContainerWithHorizontalBorders>
        {children}
      </ContainerWithHorizontalBorders>
    </div>
  )
}

export default Layout
