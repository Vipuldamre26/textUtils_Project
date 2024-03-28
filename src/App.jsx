
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./screens/Homepage";
import About from "./screens/About";
import Contact from "./screens/Contact";
import './App.css';



function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ])

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
