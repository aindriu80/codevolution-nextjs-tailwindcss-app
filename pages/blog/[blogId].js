import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" context={description} />
      </Head>
      <h1 className="context">Article</h1>
      Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}
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
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD

  console.log(
    `Connecting to example database with username ${user} and password ${password}`
  )
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description',
    },
  }
}
