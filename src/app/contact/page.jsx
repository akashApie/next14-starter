import styles from './contact.module.css'

const ContactPage =()=>{
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
            <form className={styles.form}> 
        <input placeholder='Name' className={styles.fields}></input>
        <input placeholder='Email Address' className={styles.fields}></input>
        <input placeholder='Contact' className={styles.fields}></input>
        <textarea placeholder='Message' rows={10} cols={30} className={styles.textarea}></textarea>
        <button className={styles.button}>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default ContactPage;