import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";

function App() {

  return (
    <>
        <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-60 lg:py-10">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    </>
  )
}

export default App
