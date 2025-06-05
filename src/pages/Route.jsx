import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from './Home';
import App from '../App';
import Login from './Login';
import Register from './Register';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';
import CookiePolicy from './CookiePolicy';
import Home_Details from './home_Details';










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
            Component : Home_Details,
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
        },
        {
          path: '/PrivacyPolicy' ,
          Component : PrivacyPolicy,
        },
        {
          path: "/CookiePolicy",
          Component : CookiePolicy,
        }
    ]
  },
]);







export default router;