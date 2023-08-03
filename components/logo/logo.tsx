type LogoProps = {
  size?: number
}

const Logo = ({ size = 50 }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 50 50"
    >
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M25 43.94H14.06l-3.2-5.55-2.57-4.45 2.57-4.46"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M10.86 29.48H5.7L3.13 25l3.64-6.31 1.5-2.59 2.6-4.49 2.57-4.46.62-1.09H25"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M25 39.48h-8.36l-3.2-5.54-2.58-4.46L13.47 25H8.28l3.67-6.37 1.49-2.57 2.57-4.45.63-1.09H25"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M25 15.01h-5.77L13.47 25l5.76 9.99H25M8.28 25L5.7 29.48M44.3 29.48L41.72 25M25 43.94h10.94l3.2-5.55 2.57-4.45-2.57-4.46"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M39.14 29.48l5.17-.04L46.87 25l-3.64-6.31-1.5-2.59-2.6-4.49-2.57-4.46-.62-1.09H25"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M25 39.48h8.36l3.2-5.54 2.58-4.46L36.53 25h5.19l-3.67-6.37-1.49-2.57-2.57-4.45-.63-1.09H25"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M25 15.01h5.77L36.53 25l-5.76 9.99H25M19.23 15.01l-2.59-4.49M30.77 15.01l2.59-4.49"
      ></path>
    </svg>
  )
}

export default Logo
