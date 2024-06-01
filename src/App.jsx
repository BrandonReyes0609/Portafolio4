import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fotoperfil from './assets/foto_perfil.jpeg' // Importar la imagen

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class=".container-fluid">
        <div class="row">
          <div class="col ">
            <div class="row">
              <div class="col p-3 bg-dark text-white">Brandon Javier Reyes Morales</div>
              <div class="col p-3 bg-dark text-white"></div>

            </div>
            <div class="row">
              <div class="col p-3 bg-dark text-white">Estudiante Ingenieria en Ciencias de la Computación y Tecnologías de la información</div>



            </div>
            <div class="row">
              <div class="col p-3 bg-dark text-white">Univerdad del Valle de Guatemala</div>
              <div class="col p-3 bg-dark text-white"></div>

            </div>
          </div>
          <div class="col">
            <img src={fotoperfil} alt="fotoperfil" />
          </div>
        </div>
      </div> 


    </>
  )
}

export default App
