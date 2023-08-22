import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Registration from './Pages/Registration'
import { GlobalStyle } from './Component/Global'

function App() {
  

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/"  element={<Registration/>}/>
      </Routes>
    </>
  )
}

export default App
