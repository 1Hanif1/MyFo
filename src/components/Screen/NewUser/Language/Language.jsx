import { useState } from 'react';
import Select from 'react-select'
import styles from './Language.module.scss';
export default function Language(){
    const languageOptions = [
        {value: 'english', label: 'English'},
        {value: 'hindi', label: 'हिन्दी'},
        {value: 'arabic', label: 'اَلْعَرَبِيَّةُ'},
        {value: 'korean', label: '한국어'},
        {value: 'japanese', label: '日本語'},
    ]
    const [language, setLanguage] = useState(languageOptions[0])
    const languageSelectionHandler = function (selectedOption) {
        const selectedLanguage = languageOptions.find(option => option.value === selectedOption.value);
        if (selectedLanguage) {
            setLanguage(selectedLanguage);
        }
    }

    const submitLanguageHandler = function(){
        // TODO: Store chosen in variable in a global context and then store to local storage
        // Move to next page,
        
    }

    return <section className={styles.language}>
    <h1 className={styles.language__title}>
        WELCOME🙂
    </h1>
    {/* <select className={styles.language__menu} value={language} onChange={event => setLanguage(event.target.value)}>
        <option value="english">English</option>
        <option value="hindi">हिन्दी</option>
        <option value="arabic">اَلْعَرَبِيَّةُ</option>
        <option value="korean">한국어</option>
        <option value="japanese">日本語</option>
    </select> */}
    <Select 
        className={styles.language__menu} 
        options={languageOptions} 
        defaultValue={language}
        onChange={languageSelectionHandler}
    />
    <div className={styles.language__button} onClick={submitLanguageHandler}>
        NEXT
    </div>
    <p className={styles.language__note}>Currently this application only supports English 😥</p>
    </ section>
}