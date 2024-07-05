import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import AddPage from './components/AddPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/add' element={<AddPage />}></Route>
    </Routes>
    </>
  )
}

export default App
