import User from '../components/user'
function UsersList({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      <br />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
            <br />
          </div>
        )
      })}
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
