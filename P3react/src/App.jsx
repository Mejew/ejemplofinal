import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Mensaje from './Componentes/Mensaje';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Props</h1>
      <Mensaje nombre="Hemer" edad="22" url="https://thumbs.dreamstime.com/z/bu%C3%B1uelo-lindo-del-kawai-rosa-con-el-desmoche-y-peque%C3%B1as-estrellas-objeto-separado-fondo-elemento-vector-para-su-embalaje-tarjeta-143012373.jpg" />
    </>
  )
}

export default App
