import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from './Home';
import home_Details from './home_Details';
import App from '../App';
import Login from './Login';










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
        }
    ]
  },
]);







export default router;