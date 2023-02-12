import { getSession, useSession } from 'next-auth/client'
import Link from 'next/link'
function Blog({ data }) {
  const [session] = useSession()
  console.log(session)
  return (
    <>
      <header className="container">
        <hgroup>
          <h1>Blog Page</h1>
          <p>The individual blog page - {data}</p>
          <Link href="/">Home</Link>
        </hgroup>
      </header>

      <div className="container"></div>
    </>
  )
}

export default Blog

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
        permanent: false,
      },
    }
  }
  return {
    props: {
      session,
      data: session
        ? 'List of 100 personalized blog posts'
        : 'List of free blog posts',
    },
  }
}
