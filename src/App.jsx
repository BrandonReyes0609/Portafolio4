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
      <div class="row">
        <div class="col p-3 bg-primary text-white">.col</div>
        <div class="col p-3 bg-dark text-white">.col</div>
        <div class="col p-3 bg-primary text-white">.col</div>
      </div>
    </>
  )
}

export default App
