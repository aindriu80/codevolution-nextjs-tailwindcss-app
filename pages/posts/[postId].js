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

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: '1' },
      },
      {
        params: { postId: '2' },
      },
      {
        params: { postId: '3' },
      },
    ],
    fallback: false,
  }
}

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
