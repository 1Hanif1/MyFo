
import "./Phone.scss"
import menuIcon from '../../assets/Chin/menu.svg'
import returnIcon from '../../assets/Chin/return.svg'
import Screen from "../Screen/Screen"
import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export default function Phone({className}){
    let buttonPressStart = null, pressDurationChecker = null;
    const navigate = useNavigate();
    const buttonPressed = function(){
        console.log("hello")
        buttonPressStart = Date.now();
        pressDurationChecker = setInterval(() => {
            if(buttonPressStart && Date.now() - buttonPressStart >= 3000){
                // Change route
                navigate("/intro")
                // Disable power button functions
                console.log("BUTTON WAS PRESSED FOR 3 SECONDS")
            }
            buttonPressStart = null;
        }, 3000)
    }

    const buttonReleased = function(){
        if(Date.now() - buttonPressStart < 3000){
            clearInterval(pressDurationChecker)
            console.log("BUTTON WAS RELEASED TOO SOON")
        } else {            
            buttonPressStart = null;
        }
    }
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
            <div className="power__button" onMouseDown={buttonPressed} onMouseUp={buttonReleased}></div>
        </div>
    </section>
}

