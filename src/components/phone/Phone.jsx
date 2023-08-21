
import "./Phone.scss"
import menuIcon from '../../assets/Chin/menu.svg'
import returnIcon from '../../assets/Chin/return.svg'
import Screen from "../Screen/Screen"
import { Routes, useNavigate, Route } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export default function Phone({className}){
    let buttonPressStart = null, pressDurationChecker = null;
    let buttonPressStartDefault = null, pressDurationCheckerDefault = null;
    const navigate = useNavigate();

    const buttonPressed = function(){
        
        buttonPressStart = Date.now();
        pressDurationChecker = setInterval(() => {
            if(buttonPressStart && Date.now() - buttonPressStart >= 3000){
                navigate("/intro")
            }
            buttonPressStart = null;
        }, 3000)
    }

    const buttonReleased = function(){
        if(Date.now() - buttonPressStart < 3000){
            clearInterval(pressDurationChecker)
        } else {            
            buttonPressStart = null;
        }
    }

    const buttonPressedDefault = function() {
        buttonPressStartDefault = Date.now();
        pressDurationCheckerDefault = setInterval(() => {
            if(buttonPressStartDefault && Date.now() - buttonPressStartDefault >= 5000){
                navigate("/")
            }
            buttonPressStartDefault = null;
        }, 5000)
    }

    const buttonReleasedDefault = function(){
        if(Date.now() - buttonPressStartDefault < 5000){
            clearInterval(pressDurationCheckerDefault)
        } else {            
            buttonPressStartDefault = null;
        }
    }

    const PowerButtonTurnOn = () =>
        <div 
            className="power__button" 
            onMouseDown={buttonPressed} 
            onTouchStart={buttonPressed} 
            onMouseUp={buttonReleased} 
            onTouchEnd={buttonReleased}
        ></div>

    const PowerButtonDefault = () => 
        <div 
            className="power__button test" 
            onMouseDown={buttonPressedDefault} 
            onTouchStart={buttonPressedDefault} 
            onMouseUp={buttonReleasedDefault} 
            onTouchEnd={buttonReleasedDefault}
        ></div>
    
    return <section className={`phone ${className}`}>
        
        <div className="volume">
            <div className="volume__up"></div>
            <div className="volume__down"></div>
        </div>
        
        <div className="head">
            <div className="speaker">
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
                <div className="ellipse"></div>
            </div>
            <div className="camera">
                <div className="camera__outer">
                    <div className="camera__inner"></div>
                </div>
            </div>
        </div>
        
        <Screen className="screen"/>
        
        <div className="chin">
            <div className="chin__left">
                <img src={menuIcon} alt="" />
            </div>
            <div className="chin__center">
                <div className="chin__button"></div>
            </div>
            <div className="chin__right">
            <img src={returnIcon} alt="" />
            </div>
        </div>

        <div className="power">
            <Routes>
                <Route path="/" Component={PowerButtonTurnOn}/>
                <Route path="*" Component={PowerButtonDefault}/>
            </Routes>
        </div>
    </section>
}

