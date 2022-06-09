import Head from 'next/head'
import Banner from '../components/Banner'

type Props = {
  buttonText: string,
  handleOnClick: () => void;
}

const Home = ({ buttonText, handleOnClick }: Props) => {

  const handleOnBannerBtnClick = () => {
    console.log('Banner Button Clicked!');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-mesh">
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Banner
          buttonText='View stores nearby'
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  )
}

export default Home
