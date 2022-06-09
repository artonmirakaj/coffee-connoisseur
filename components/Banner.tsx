import styles from './Banner.module.css';

type Props = {
  buttonText: string,
  handleOnClick: () => void,
}

const Banner = ({ buttonText, handleOnClick }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops</p>
      <button
        className={styles.button}
        onClick={handleOnClick}>
        {buttonText}
      </button>
    </div>
  )
}

export default Banner;