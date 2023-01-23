import Link from 'next/link'
function PostList({ posts }) {
  return (
    <>
      <header className="container">
        <hgroup>
          <h1>List of Posts</h1>
          <p>The individual products page</p>
          <Link href="/">Home</Link>
        </hgroup>
      </header>

      <div className="container">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`posts/${post.id}`} passHref>
                <h2>
                  {post.id} {post.title}
                </h2>
              </Link>
              <hr />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default PostList

export async function getStaticProps() {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return {
    props: {
      // posts: data.slice(0, 3),
      posts: data,
    },
  }
}
