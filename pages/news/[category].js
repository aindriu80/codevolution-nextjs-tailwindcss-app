import Link from 'next/link'
function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <header className="container">
        <hgroup>
          <h1>Articles List by Category</h1>
          <p>
            Showing news for category <i>{category}</i>
          </p>
          <Link href="/">Home</Link>
        </hgroup>
      </header>

      <div className="container">
        {articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>
                {article.id} |{article.title}
              </h2>
              <p>{article.description}</p>
              <hr />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default ArticleListByCategory

export async function getServerSideProps(context) {
  const { params, req, res, query } = context
  console.log(query)
  console.log(req.headers.cookie)
  res.setHeader('Set-Cookie', ['name=Aindriu'])
  const { category } = params
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  )
  const data = await response.json()

  return {
    props: {
      articles: data,
      category,
    },
  }
}
