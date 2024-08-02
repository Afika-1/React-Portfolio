import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Education from "./components/Education";

const router =createBrowserRouter([

{
  path:'/',
  element:<Portfolio/>,
  errorElement:<div>Error</div>

},
{
  path:'/about',
  element:<About/>,
  errorElement:<div>Error</div>,
  

},
{
  
    path:'/education',
    element:<Education/>,
    errorElement:<div>Error</div>,
  },

{
  path:'/projects',
  element:<Projects/>,
  errorElement:<div>Error</div>

},
{
  path:'/contact',
    element:<Contact/>,
    errorElement:<div>Error</div>
  
},


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navbar/> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,


)
