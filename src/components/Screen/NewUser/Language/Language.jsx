import { useState } from 'react';
import Select from 'react-select'
import styles from './Language.module.scss';
import { useData } from '../../../../context/userDataContext';
import { useNavigate } from 'react-router-dom';
// import { useData } from '../../../../context/userDataContext';
const languageOptions = [
    {value: 'english', label: 'English'},
    {value: 'hindi', label: 'हिन्दी'},
    {value: 'arabic', label: 'اَلْعَرَبِيَّةُ'},
    {value: 'korean', label: '한국어'},
    {value: 'japanese', label: '日本語'},
]

const emojis = ['🙂','😄','😁','🥳','🤩','❤️']

export default function Language(){
    const { setValue } = useData();
    const navigate = useNavigate();
    const [emoji, setEmoji] = useState('🙂');
    const [language, setLanguage] = useState(languageOptions[0])
    
    setTimeout(() => {
        const randomEmoji = emojis[Math.floor((Math.random()*emojis.length))];
        setEmoji(randomEmoji);
    }, 1000)
    
    const languageSelectionHandler = function (selectedOption) {
        const selectedLanguage = languageOptions.find(option => option.value === selectedOption.value);
        if (selectedLanguage) {
            setLanguage(selectedLanguage);
        }
    }

    const nextPage = function(){
        // Store chosen in variable in a global context and then store to local storage
        console.log('Hello')
        setValue(data => {
            return {
                ...data,
                language
            }
        })
        navigate('/newuser/account')
    }

    return (
    <section className={styles.language}>
        <h1 className={styles.language__title}>
            WELCOME <span>{emoji}</span>
        </h1>
        <Select 
            className={styles.language__menu} 
            options={languageOptions} 
            defaultValue={language}
            onChange={languageSelectionHandler}
        />
        <div className={styles.language__button} 
        onClick={nextPage}>
            NEXT
        </div>
        <p className={styles.language__note}>
            Currently this application only supports English 😥
        </p>
    </ section>
    )
}