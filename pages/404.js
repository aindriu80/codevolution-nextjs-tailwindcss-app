import Link from 'next/link'
import Image from 'next/image'

export default function FourOhFour() {
  return (
    <>
      <h3>404 - Page Not Found</h3>
      <Image src="/img/404.png" alt="404 Image" width="500" height="500" />
      <Link href="/">Go back home</Link>
    </>
  )
}
