import Head from 'next/head'

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" context={description} />
      </Head>
      <h1 className="context">Article</h1>
    </>
  )
}

export default Blog

export async function getStaticPaths() {
  return {
    paths: [{ params: { blogId: '1' } }],
    fallback: false,
  }
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description',
    },
  }
}
