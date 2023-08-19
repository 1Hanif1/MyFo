import Phone from '../phone/Phone'
import styles from './Home.module.scss'

export default function Home(){
    return <main className={styles.main}>
        <section className={styles.main__left}></section>
        <Phone className={styles.main__center}/>
        <section className={styles.main__right}></section>
    </main>
}

