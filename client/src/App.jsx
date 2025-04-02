import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Global/Header.jsx';
import Footer from './components/Global/Footer.jsx';
import Question from './components/Home/Question.jsx';


function App() {

  return (
    <>
    <div className=' relative w-[100vw] max-w-[1450px] mx-auto lg:p-10 pt-1   '>
    <Header />
     <Outlet />
     <Question />
     <Footer />
    </div>
    </>
  )
}

export default App
