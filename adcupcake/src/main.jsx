import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContadorClase from './components/ContadorClase.jsx'
import ContadorFuncion from './components/ContadorFuncion.jsx'
import Cupcake from './components/Cupcake.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
