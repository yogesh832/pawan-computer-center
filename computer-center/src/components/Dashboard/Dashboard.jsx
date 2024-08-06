import React from 'react'

import ControlPanel from './pannel/ControlPanel'
import Sidebar from './Sidebar'



export const Dashboard = () => {
  return (
    <>
    <div style={{display: 'flex', Height: '100vh'}}>
  <Sidebar />  
  <ControlPanel />
  </div>
  </>
  )
}
