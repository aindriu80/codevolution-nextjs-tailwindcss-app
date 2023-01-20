import { useRouter } from 'next/router'
function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <h2>Loading.......</h2>
  }

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
  // const response = await fetch('http://jsonplaceholder.typicode.com/posts')
  // const data = await response.json()

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   }
  // })

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
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  const data = await response.json()

  if (!data.id) {
    return {
      notFound: true,
    }
  }

  console.log(`Generating page for /posts/${params.postId}`)

  return {
    props: {
      post: data,
    },
  }
}
