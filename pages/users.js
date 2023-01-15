function UsersList({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      <br />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <br />
            <p>{user.email}</p>
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
