import React from 'react'
import { styled } from 'styled-components'
import {AiOutlineHome} from 'react-icons/ai'
import Sidebar from './Sidebar'
import Main from './Main'

const AppContainer = styled.div`
    position: relative;
    display:flex;
`

const Container = () => {
  return (
    <AppContainer>
       <Sidebar />
       <Main />
    </AppContainer>
  )
}

export default Container