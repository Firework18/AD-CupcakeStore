import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cupcake from './components/Cupcake'
import { cupcakes } from './data/Cupcakes'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <div>
        <h1 className='font-extrabold text-5xl mb-8'>Tienda de Cupcakes</h1>

        <div className='grid grid-cols-3 gap-8'>
          {cupcakes.map(cupcake => (
            <Cupcake cupcake={cupcake} key={cupcake.id} />
          ))}
        </div>

      </div >
      <ToastContainer />
    </>
  )
}

export default App
