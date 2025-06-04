
import { Outlet } from 'react-router'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Home from './pages/Home'

function App() {
 

  return (
    <>
<Navbar></Navbar>
<Home></Home>
<Outlet></Outlet>

<Footer></Footer>
    </>
  )
}

export default App
