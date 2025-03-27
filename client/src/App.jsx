import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Global/Header.jsx';
import Footer from './components/Global/Footer.jsx';


function App() {

  return (
    <>
    <div className=' mt-8 w-[100vw] max-w-[1450px]'>
    <Header />
     <Outlet />
     <Footer />
    </div>
    </>
  )
}

export default App
