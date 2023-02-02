import Link from 'next/link'
// import styles from '../styles/Contact.module.css'
import styles from '../styles/Contact.module.scss'
function contact() {
  return (
    <>
      <header className="container">
        <hgroup>
          <h2>Contact Page</h2>
          <p>Loading comments with API request.....</p>
          <Link href="/">Home</Link>
          <button className="btn btn-primary">Css styling</button>
        </hgroup>
      </header>

      <container>
        {/* <div className={styles.highlight}>Contact</div> */}
        <div className={styles.highlightscss}>Contact</div>
      </container>
    </>
  )
}

export default contact
