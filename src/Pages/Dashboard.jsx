import React from 'react'
import { styled } from 'styled-components'
import Sidebar from '../Component/Sidebar'

const AppContainer = styled.div`
    position: relative;
    display:flex;
`

const DashboardStyle = styled.div`
   width: 100%;
   margin-left:210px;
   margin-top:10px;
`
const Dashboard = () => {
  return (
    <AppContainer>
      <Sidebar />
      <DashboardStyle >
      <div>Dashboard</div>
      </DashboardStyle>
    </AppContainer>
  )
}

export default Dashboard