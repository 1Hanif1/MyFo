import './App.scss'
import Home from './home/Home'
import Default from './Screen/default/Default'
import Intro from './Screen/Intro/Intro'
import PowerButtonImage from "../assets/Instructions/powerbutton.png"
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import NewUser from './Screen/NewUser/NewUser'
import Language from './Screen/NewUser/Language/Language'
import { DataProvider } from '../context/userDataContext'
import Account from './Screen/NewUser/Account/Account'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
      children: [
        {
          path: '',
          element: <Default />
        },
        {
          path: "intro",
          element: <Intro />
        },
        {
          path: "newuser",
          element: <NewUser />,
          children: [
            {
              path:"language",
              element: <Language />
            },
            {
              path: "account",
              element: <Account />
            }
          ]
        }
      ]
  },

])

const bannerStyle = {
  color: "white",
  position: "absolute",
  top: '4em',
  left: "-9em",
  fontSize: "1.2em",
  textAlign: "center",
  transform: "rotate(-45deg)",
  backgroundColor: "dodgerBlue",
  padding: "1em",
  width: "30em",
  fontFamily: "Arial"
};

function Banner() {
  return (
    <div style={bannerStyle}>UNDER DEVELOPMENT</div>
  )
}

function InstructionsTab() {
  return (
    <div className='phone__instruction'>
    <h1>Simulator Instructions</h1>
    <p>
      <figure>
        <img src={PowerButtonImage} alt="power button" />
      </figure>
      <div >
        <span>Press and hold the power button for 3 seconds to power up the device</span>
        <span>Press and hold the power button for 5 seconds to shut down the device</span>
      </div>
    </p>
  </div>
  )
}

function App() {

  return (
    <>
    <Banner />
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
    <InstructionsTab />
    </>
  )
}

export default App
