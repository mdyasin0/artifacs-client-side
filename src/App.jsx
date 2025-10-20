
import { Outlet } from 'react-router'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'


function App() {
 

  return (
    <>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
    </>
  )
}

export default App
