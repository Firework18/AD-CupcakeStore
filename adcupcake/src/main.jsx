import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import ContadorClase from './components/ContadorClase.jsx'
import ContadorFuncion from './components/ContadorFuncion.jsx'
import Cupcake from './components/cards/Cupcake.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
