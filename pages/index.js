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
      <header class="container">
        <hgroup>
          <h1>Next.JS HomePage</h1>
          <h2>
            a Next.JS project using some of it's features, with Pico CSS styling
          </h2>
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
        <button onClick={handleClick} class="secondary">
          Click me now!
        </button>
      </div>
      <br />

      <div className="container">
        <section>
          <Link href="/users">Users </Link> |<Link href="/posts"> Posts</Link>
        </section>
      </div>
    </div>
  )
}
export default Home
