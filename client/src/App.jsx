import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Global/Header.jsx';
import Footer from './components/Global/Footer.jsx';
import Question from './components/Home/Question.jsx';
import Social from './components/Global/Social.jsx';
import PopUpContact from './components/Global/PopUpContact.jsx';
import { LuMessagesSquare } from "react-icons/lu";
import ScrollToTop from './components/Global/ScrollToTop.jsx';

function App() {

  return (
    <>
    <div className=' relative w-[100vw] max-w-[1450px] mx-auto lg:p-10 pt-1   '>
      {/* <div className=' absolute text-3xl '>
      <LuMessagesSquare  className=''/>
      </div> */}
    <Header />
    <Social />
    <PopUpContact />
    <ScrollToTop />
     <Outlet />
     <Question />
     <Footer />
    </div>
    </>
  )
}

export default App
