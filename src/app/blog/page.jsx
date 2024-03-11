import Postcard from '@/component/postcard/page';
import styles from './blog.module.css'

// const imgArray=[{img:"https://source.unsplash.com/random/200x200?sig=1",date:'01.01.2020',post:'1'},{img:"https://source.unsplash.com/random/200x200?sig=2",date:'01.01.2020',post:'1'},{img:"https://source.unsplash.com/random/200x200?sig=3",date:'12.03.2023',post:'1'},{img:"https://source.unsplash.com/random/200x200?sig=4",date:'11.10.2021',post:'1'},{img:"https://source.unsplash.com/random/200x200?sig=5",date:'01.09.2018',post:'1'}]

const getData=async ()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!res.ok) { 
        throw new Error("Something went wrong"); 
    }

    return res.json();
}

const BlogPage =async ()=>{
    const array=await getData();
    return (
        <div className={styles.container}>
            <div className={styles.postcards}>
                {array.map((o=>(
                    <Postcard posts={o} key={o.id}/>
                )))
            }
            </div>
        </div>
    )
}

export default BlogPage;