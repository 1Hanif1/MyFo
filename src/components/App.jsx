import './App.css'
import Home from './home/Home'
import Default from './Screen/default/Default'
import Intro from './Screen/Intro/Intro'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

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
          }
      ]
  },

])
function App() {
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

  
  
  return (
    <>
    <div style={bannerStyle}>UNDER DEVELOPMENT</div>
    <RouterProvider router={router} />
    </>
  )
}

export default App
