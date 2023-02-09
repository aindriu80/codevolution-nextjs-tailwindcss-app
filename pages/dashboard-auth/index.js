import { useState, useEffect } from 'react'
import Link from 'next/link'
function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)

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

export default Dashboard
