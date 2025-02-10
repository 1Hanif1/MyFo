import styles from './Intro.module.scss'
import { useNavigate } from 'react-router-dom'
export default function Intro(){
    const navigate = useNavigate()
    
    const changeTab = function(){
        const userData = localStorage.getItem('userData')
        setTimeout(() => {
            if(userData) navigate('/phone')
            else navigate('/newuser/language')
        }, 3000)
    }

    return <div className={styles.main}>
        <div className={`${styles.orange} ${styles.circle}`}></div>
        <div className={`${styles.green} ${styles.circle}`}></div>
        <div className={`${styles.blue} ${styles.circle}`}></div>
        <div className={`${styles.purple} ${styles.circle}`}></div>
        <div className={`${styles.main__circle}`}>
            <span>M</span>
            <span>Y</span>
            <span>F</span>
            <span onAnimationEnd={changeTab}>O</span>
        </div>
    </div>
}