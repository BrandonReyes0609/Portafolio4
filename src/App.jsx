import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button className="btn btn-primary">Primary Button</button>
      </div>
      <div class="container">
        <div class="row">
          <div class="col p-3 bg-dark text-white">Brandon Javier Reyes Morales</div>
          <div class="col p-3 bg-dark text-white"></div>
          <div class="col p-3 bg-dark text-white"></div>
        </div>
        <div class="row">
          <div class="col p-3 bg-dark text-white">Estudiante Ingenieria en Ciencias de la Computación y Tecnologías de la información</div>
          <div class="col p-3 bg-dark text-white"></div>
          <div class="col p-3 bg-dark text-white"></div>

        </div>
        <div class="row">
          <div class="col p-3 bg-dark text-white">Univerdad del Valle de Guatemala</div>
          <div class="col p-3 bg-dark text-white"></div>
          <div class="col p-3 bg-dark text-white"></div>
        </div>
    </div> 

    </>
  )
}

export default App
