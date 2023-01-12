import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
    </div>
  )
}
export default Home
