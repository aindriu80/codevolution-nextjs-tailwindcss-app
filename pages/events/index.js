import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList)
  const router = useRouter()

  const fetchSportsEvents = async () => {
    const response = await fetch(`http://localhost:4000/events?category=sports`)
    const data = await response.json()
    setEvents(data)
    router.push('/events?category=sports', undefined, { shallow: true })
  }

  return (
    <>
      <header className="container">
        <hgroup>
          <h1>List of Events</h1>
          <p>The list of events.....</p>
          <Link href="/">Home</Link>
          <button onClick={fetchSportsEvents}>Fetch Sports Events</button>
        </hgroup>
      </header>

      <div className="container">
        {events.map((event) => {
          return (
            <div key={event.id}>
              <h2>
                {event.id} |{event.title}| {event.date} | {event.category}
              </h2>
              <p>{event.description}</p>
              <hr />
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const { category } = query
  const queryString = category ? 'category=sports' : ''
  const response = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await response.json()

  return {
    props: {
      eventList: data,
    },
  }
}

export default EventList
