import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Registration from './Pages/Registration'
import { GlobalStyle } from './Component/Global'
import Login from './Pages/Login'
import Container from './Component/Container'
import Dashboard from './Pages/Dashboard'
import { styled } from 'styled-components'
import Sidebar from './Component/Sidebar'
import Translate from './Pages/Translate'




function App() {
  
  return (
    <>
      
      <GlobalStyle />
      <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/home"  element={<Registration/>}/>
      <Route path="/sidebar"  element={<Container/>}/>
      <Route path="/dashboard"  element={<Dashboard/>}/>
      <Route path="/translate"  element={<Translate/>}/>
      </Routes>
    </>
  )
}

export default App
