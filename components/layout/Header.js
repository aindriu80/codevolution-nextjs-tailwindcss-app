import Link from 'next/link'

import { signIn, signOut, useSession } from 'next-auth/client'
function Header() {
  const [session, loading] = useSession()
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
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
              <a
                onClick={(e) => {
                  e.preventDefault()
                  signIn('github')
                }}>
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/api/auth/signout">Signout</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
export default Header
