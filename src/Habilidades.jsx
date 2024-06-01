import React from 'react';
import './App.css';
import fotoperfil from './assets/foto_perfil.jpeg'; // Importar la imagen

function App() {
  return (
    <div className="container-fluid p-3 bg-dark text-white vh-100 d-flex align-items-center">
      <div className="row w-100 d-flex">
        <div className="text-container">
          <div className="row">
            <div className="col p-3">
              <ul class="list-group typing-animation">
                <li class="list-group-item active">Active item</li>
                <li class="list-group-item">Second item</li>
                <li class="list-group-item">Third item</li>
              </ul> 
            </div>    
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
