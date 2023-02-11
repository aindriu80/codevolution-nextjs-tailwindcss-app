import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'

export default function Dashboard() {
  const { data: session } = useSession()
  const [content, setContent] = useState()

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/examples/protected')
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])

  // If no session exists, display access denied message
  if (!session) {
    return <h4>Error..............Not Authorized</h4>
  }

  return (
    <>
      <header className="container">
        <hgroup>
          <h2>Dashboard</h2>
          <p>The Auth Dashboard.....</p>
          <Link href="/">Home</Link>
        </hgroup>
      </header>

      <div className="container"></div>
    </>
  )
}
