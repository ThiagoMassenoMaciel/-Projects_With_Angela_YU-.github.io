import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';
//bootstrap css

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './home/Home.jsx';

import Blog from './blog/Blog.jsx';
import Navitems from './components/Navitems.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {  path: "/"     ,  element: <Home/>}
      ,
      {  path: "/blog" ,  element: <Blog/>}
      ,
      {  path: "/components"  , element: <Navitems/> }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>          i think the guy on a video ignore the strictmode and just paste the content not tag inclued too            time video 24:40
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
