import styles from './userDetails.module.css';

const getData=async (id)=>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if(!res.ok) { 
        throw new Error("Something went wrong"); 
    }

    return res.json();
}

const userDetails=async ({userid})=>{

    const data=await getData(userid)

    console.log(userid)
    return (
        <div className={styles.container}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.email}>{data.email}</div>
        </div>
    );
}
    
export default userDetails;