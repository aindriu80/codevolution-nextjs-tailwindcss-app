import Link from 'next/link'
function Blog() {
  return (
    <>
      <header className="container">
        <hgroup>
          <h1>Blog Page</h1>
          <p>The individual products page</p>
          <Link href="/">Home</Link>
        </hgroup>
      </header>

      <div className="container"></div>
    </>
  )
}

export default Blog
