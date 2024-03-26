import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/HomePage'
import About from './components/About/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Career from './components/Career/Career.jsx'
import GalleryComponent from './components/Gallery/GalleryComponent.jsx'
import Card from './components/Cards/Cards'
import MainBody from './components/Mainbody/MainBody.jsx'
import ContactUs from './views/contactUs/contactUs.jsx'
import Ai from './components/Services/AI/Ai.jsx'
import Policies from './components/Investors/Policies.jsx'
import AnnualReturns from './components/Investors/AnnualReturns.jsx'
import History from './components/About/History/History.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/about/career", element: <Career /> },
      { path: "/about/history", element: <History /> },
      { path: "/gallery", element: <GalleryComponent /> },
      { path: "/services", element: <MainBody /> },
      { path: "/services/ai", element: <Ai /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/investors/policies", element: <Policies /> },
      {
        path: "/investors/annulReturns", element: <AnnualReturns />
      }
    ] // TODO: fill this with actual
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
