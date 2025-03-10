import { useState } from 'react'
import Calculator from './components/Calculator'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Calculator on React JS</h1>
      <Calculator />
    
    </>
  )
}

export default App
