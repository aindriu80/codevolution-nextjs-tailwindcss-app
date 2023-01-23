import Link from 'next/link'
function NewsArticleList({ articles }) {
  return (
    <>
      <header className="container">
        <hgroup>
          <h1>List of News Articles</h1>
          <p>various news articles</p>
          <Link href="/">Home</Link>
        </hgroup>
      </header>

      <div className="container">
        {articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>
                {article.id} | {article.title} | {article.category}
              </h2>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default NewsArticleList

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()
  return {
    props: {
      articles: data,
    },
  }
}
