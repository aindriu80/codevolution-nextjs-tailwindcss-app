import Link from 'next/link'
function prerender() {
  return (
    <>
      <header className="container">
        <hgroup>
          <h2>Next JS pre-Rendering</h2>
          <p>Pre Rendering in Next.JS</p>
          <Link href="/">Home</Link>
        </hgroup>
      </header>

      <div className="container"></div>
    </>
  )
  return
}

export default prerender
