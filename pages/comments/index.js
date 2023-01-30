import { useState } from 'react'
import Link from 'next/link'

function CommentsPage() {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  const fetchComments = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()
    setComments(data)
  }

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
  }
  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    console.log(data)
    fetchComments()
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
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Please enter a comment"
        />
        <button onClick={submitComment}>Submit Comment</button>
        <button onClick={fetchComments}>Load Comments</button>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.id}
              &nbsp;
              {comment.text}
              <button onClick={() => deleteComment(comment.id)} />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default CommentsPage
