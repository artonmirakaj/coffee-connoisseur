import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'

const Home = () => {

  const handleOnBannerBtnClick = () => {
    console.log('Banner Button Clicked!');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText='View stores nearby'
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src='/static/hero-image.png' width={700} height={400}/>
        </div>
      </main>
    </div>
  )
}

export default Home
