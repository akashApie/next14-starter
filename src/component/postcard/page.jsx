import Image from 'next/image';
import styles from './postcard.module.css'
import Link from 'next/link';

const Postcard=({posts})=>{
    const img="https://source.unsplash.com/random/200x200?sig=";
    const dates="01.01.01"
    return (
       <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.upper}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src={`${img}${posts.id}`} fill className={styles.img} alt=''/>
                </div>
            </div>
            <span className={styles.date}><h3 className={styles.dateTitle}>{dates}</h3></span>
            </div>
            <div className={styles.bottom}>
                <div className={styles.title}>{posts.title}</div>
                <div className={styles.desc}>{posts.body}</div>
                <Link href={`/blog/posts?id=${posts.id}`}>READ MORE</Link>
            </div>
        </div>
       </div> 
    );
}

export default Postcard;