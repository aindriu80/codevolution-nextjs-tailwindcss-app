import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order......')
    router.replace('/product')
  }
  return (
    <div>
      <header className="container">
        <hgroup>
          <h1>Next.JS HomePage</h1>
          <p>
            a Next.JS project using some of its features, with Pico CSS styling
          </p>
        </hgroup>
      </header>

      <div className="container">
        <section>
          <Link href="/blog">Blog </Link> |
          <Link href="/product"> Products </Link> |
          <Link href="/prerender"> Pre Render </Link>
        </section>
      </div>

      <br />

      <div className="container">
        <button onClick={handleClick} className="secondary">
          Click me now!
        </button>
      </div>
      <br />

      <div className="container">
        <section>
          <Link href="/users">Users </Link> |<Link href="/posts"> Posts</Link> |{' '}
          <Link href="/news"> News</Link> |
          <Link href="/dashboard"> Dashboard</Link> |
          <Link href="/events"> Events</Link> |
          <Link href="/comments"> Comments</Link> |
          <Link href="/api"> API </Link>|<Link href="/contact"> Contact</Link> |
          <Link href="/about"> About</Link>
        </section>
      </div>
    </div>
  )
}
export default Home
