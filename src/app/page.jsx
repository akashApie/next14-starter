import Image from 'next/image';
import styles from './home.module.css'

const Home = () => {
  return( 
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.title}>
        Title
      </div>
      <div className={styles.description}>
        Description
      </div>
      <div className={styles.button}>
        <button>Contact</button>
        <button>Learn More</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" fill/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" fill className={styles.img}/>
    </div>
  </div>
  );
};

export default Home;