import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fotoperfil from './assets/foto_perfil.jpeg' // Importar la imagen

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class=".container-fluid col p-3 bg-dark text-white">
        
          <div class="row">
            <div class="col ">
              <div class="row">
                <div class="col p-3 bg-dark text-white"><p class="text-start"> Brandon Javier Reyes Morales</p></div>
                <div class="col p-3 bg-dark text-white"></div>

              </div>
              <div class="row">
                <div class="col p-3 bg-dark text-white"><p class="text-start">Estudiante Ingenieria en Ciencias de la Computación y Tecnologías de la información</p></div>
                <div class="col p-3 bg-dark text-white"></div>



              </div>
              <div class="row">
                <div class="col p-3 bg-dark text-white"><p class="text-start"> Univerdad del Valle de Guatemala</p></div>
                <div class="col p-3 bg-dark text-white"></div>

              </div>
            </div>
            <div class="col p-3 bg-dark text-white">
              <img src={fotoperfil} alt="fotoperfil"style={{ width: '50%', height: 'auto' }} class="rounded-circle" />
            </div>
          </div>
      </div> 


    </>
  )
}

export default App
