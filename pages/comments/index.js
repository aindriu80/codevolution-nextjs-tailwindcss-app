import { useState } from 'react'
import Link from 'next/link'

function CommentsPage() {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()
    setComments(data)
  }
  return (
    <>
      <header className="container">
        <hgroup>
          <h1>Comments</h1>
          <p>Loading comments with API request.....</p>
          <Link href="/">Home</Link>
        </hgroup>
      </header>

      <div className="container">
        <button onClick={fetchComments}>Load Comments</button>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.id}
              &nbsp;
              {comment.text}
            </div>
          )
        })}
      </div>
    </>
  )
}
export default CommentsPage
