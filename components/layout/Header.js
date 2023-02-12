import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
function Header() {
  const [session, loading] = useSession()
  // console.log(session, loading)
  return (
    <nav className="header">
      <h1 className="logo">
        <Link href="#">NextAuth</Link>
      </h1>
      <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard-auth">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>

        {!loading && !session && (
          <li>
            <Link href="/api/auth/signin">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  signIn('github')
                }}>
                Sign In
              </button>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/api/auth/signout">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}>
                Signout
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
export default Header
