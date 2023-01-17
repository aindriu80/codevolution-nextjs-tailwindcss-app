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
      <h1>HomePage</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
      <Link href="/prerender">Pre Render</Link>
      <br />
      <button onClick={handleClick}>Click me now!</button>
      <br />
      <Link href="/users">Users</Link>
      <br />
      <Link href="/posts">Posts</Link>
    </div>
  )
}
export default Home
