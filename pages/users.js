import Link from 'next/link'
import User from '../components/user'
function UsersList({ users }) {
  return (
    <>
      <header className="container">
        <hgroup>
          <h1>List of Users</h1>
          <p>The individual products page</p>
          <Link href="/">Home</Link>
        </hgroup>
      </header>

      <div className="container">
        <br />
        {users.map((user) => {
          return (
            <div key={user.id}>
              <User user={user} />
              <br />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default UsersList

export async function getStaticProps() {
  const response = await fetch('http://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)

  return {
    props: {
      users: data,
    },
  }
}
