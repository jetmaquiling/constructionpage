import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ernie Abella Website is in Development.</title>
      </Head>
      <video autoPlay muted loop  className={styles.video}>
        <source src="/video.mp4" type="video/mp4"/>
      </video>
      <div className={styles.textDrop}>
          <h1><b>Ernie Abella's</b> Website is Currently in <b>Development.</b></h1>        
          <h3>Contact secretariat@bagongpilipino.org</h3>
      </div>
      <div className={styles.frontDrop}>
          
          <img src="/papaImage.jpg" />
          <img src="/text.jpg" />
      </div>
    </div>
  )
}
