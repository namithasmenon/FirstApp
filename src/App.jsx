import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Mean from './components/Mean'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'element={<View/>}></Route>
      <Route path='/add'element={<Add person={{name:'Namitha',
      email:'namitha@gmail',
      password:'mcdcd',
      phone:'2426828161262'}}/>}></Route>
      <Route path='/mean'element={<Mean/>}></Route>

    </Routes>
    
      </>  
    
  )
}

export default App
