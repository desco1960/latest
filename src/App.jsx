import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Project/Navbar'
import Project from './Project/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Project/>
    </>
  )
}

export default App
