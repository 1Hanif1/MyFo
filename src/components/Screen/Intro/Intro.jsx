import styles from './Intro.module.scss'
export default function Intro(){
    return <div className={styles.main}>
        <div className={`${styles.orange} ${styles.circle}`}></div>
        <div className={`${styles.green} ${styles.circle}`}></div>
        <div className={`${styles.blue} ${styles.circle}`}></div>
        <div className={`${styles.purple} ${styles.circle}`}></div>
        <div className={`${styles.main__circle}`}>
            <span>M</span>
            <span>Y</span>
            <span>F</span>
            <span>O</span>
        </div>
    </div>
}