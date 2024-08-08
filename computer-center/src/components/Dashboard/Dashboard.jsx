import React from 'react'

import ControlPanel from './pannel/ControlPanel'
import Sidebar from './Sidebar'
import MarketingTools from './Marketing Tool/MarketingTool'
import CenterMessage from './CenterMessage/CenterMessage'
import AddStudent from './Student section/AddSrudent'


export const Dashboard = () => {
  return (
    <>
    <div style={{display: 'flex', Height: '100vh'}}>
  {/* <Sidebar />  
 <ControlPanel /> */}

 
  </div>
  {/* <MarketingTools /> */}
  {/* <CenterMessage /> */}
  <AddStudent/>
  </>
  )
}
