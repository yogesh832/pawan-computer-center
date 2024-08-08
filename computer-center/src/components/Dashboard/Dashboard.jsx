import React from 'react'

import ControlPanel from './pannel/ControlPanel'
import Sidebar from './Sidebar'
import MarketingTools from './Marketing Tool/MarketingTool'
import CenterMessage from './CenterMessage/CenterMessage'
import AddStudent from './Student section/AddSrudent'
import Addfund from './AccountSection/Addfund'
import Addstudentfee from './AccountSection/Addstudentfee'
import Viewstudentfee from './AccountSection/Viewstudentfee'
import Passbook from './AccountSection/Passbook'



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
