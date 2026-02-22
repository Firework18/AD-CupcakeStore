import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cupcake from './components/cards/Cupcake'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/sections/Navbar'
import Home from './components/pages/Home'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <Navbar />

      <Home />

      {/* Mensaje del toast */}
      <ToastContainer />
    </>
  )
}

export default App
