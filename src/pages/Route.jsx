import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from './Home';
import home_Details from './home_Details';
import App from '../App';
import Login from './Login';
import Register from './Register';
import TermsOfUse from './TermsOfUse';










 const router = createBrowserRouter([
  {
    path: "/",
    Component: App ,
    children:[
        {
            index:true ,
            Component : Home ,
        },
        {
            path: "/details/:id",
            Component : home_Details,
        },
        {
          path: "/Home",
          Component: Home,
        },
        {
          path:"/login",
          Component : Login ,
        },
        {
          path: "/Register" ,
          Component : Register ,
        },
        {
          path:"/TermsOfUse",
          Component : TermsOfUse,
        }
    ]
  },
]);







export default router;