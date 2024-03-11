"use client"
import { useSearchParams } from 'next/navigation';
import styles from './post.module.css';
import Image from 'next/image';
import UserDetails from '@/component/userDetails/page';

const img="https://source.unsplash.com/random/200x200?sig="

const getData=async (id)=>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if(!res.ok) { 
        throw new Error("Something went wrong"); 
    }

    return res.json();
}

const SinglePostPage = async ()=>{

    const query=useSearchParams();
    const id=query.get('id');
    
    const info=await getData(id);

    console.log(info)
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
               <Image src={`${img}${id}`} fill alt=''/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.title}>{info.title}</div>
                <div className={styles.desc}>
                <UserDetails userid={info.userId} className={styles.userdetail}/>
                <div className={styles.body}>{info.body}</div>
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;