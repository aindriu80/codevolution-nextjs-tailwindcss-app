function Post({ post }) {
  return (
    <>
      <h2>
        {post.id}
        {post.title}
        <p>{post.body}</p>
      </h2>
    </>
  )
}

export default Post

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  const data = await response.json()

  return {
    props: {
      post: data,
    },
  }
}
