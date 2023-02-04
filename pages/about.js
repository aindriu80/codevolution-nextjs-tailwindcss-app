import Head from 'next/head'
import Link from 'next/link'

// import styles from '../styles/About.module.css'
import styles from '../styles/About.module.scss'
import Footer from '../components/Footer'
function About() {
  return (
    <>
      <Head>
        <title>About Page Next.js - A tutorial from Codevolution </title>
        <meta name="description" content="Free tutorial on web development" />
      </Head>
      <header className="container">
        <hgroup>
          <h1>About Page</h1>
          <p>The About Page.....</p>
          <Link href="/">Home</Link>
          <button className="btn btn-primary">Css styling</button>
        </hgroup>
      </header>

      <container>
        {/* <div className={styles.highlight}>About</div> */}
        <div className={styles.highlightscss}>About</div>
      </container>
    </>
  )
}

export default About

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page} Some text here
      <Footer />
    </>
  )
}
