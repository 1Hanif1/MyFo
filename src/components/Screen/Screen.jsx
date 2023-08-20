import './Screen.scss'
import { Outlet } from 'react-router-dom'

/* eslint-disable react/prop-types */
export default function Screen({className}){

    return <div className={`${className}`}>
        <Outlet />
    </div>
}