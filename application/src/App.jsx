import { useState } from 'react'
import './App.css'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Welcome</h1>
        <Login />
    </div>
  )
}

export default App
