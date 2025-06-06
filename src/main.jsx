import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './index.css'
import App from './App.jsx'
import router from './pages/Route.jsx'
import { RouterProvider } from 'react-router'
import Authprovider from './Provider/Authprovider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
 <RouterProvider router={router} />
    <ToastContainer />
    </Authprovider>
  </StrictMode>
)
