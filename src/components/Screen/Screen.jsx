import './Screen.scss'
import Intro from './Intro/Intro'
/* eslint-disable react/prop-types */
export default function Screen({className}){

    return <div className={`${className}`}>
        <Intro />
    </div>
}