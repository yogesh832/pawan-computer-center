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
import CertificateRequisition from './CertificatesFile/CertificateRequisition'
import TrackCertificate from './CertificatesFile/TrackCertificate'
import ViewCertificate from './CertificatesFile/ViewCerticate'
import AddMarks from './OfflineExamination/AddMarks'
import ViewMarks from './OfflineExamination/ViewMarks'





export const Dashboard = () => {
  return (
    <>
    <div className='flex'>
  <Sidebar />  
 {/* <ControlPanel />  */}
  {/* <MarketingTools />  */}
    {/* <CenterMessage /> */}

   {/* <Addfund/>  */}
   {/* <Addstudentfee/> */}
   {/* <Viewstudentfee/> */}
   {/* <Passbook/> */}
   
  </div>
  {/* <AddMarks /> */}
 <ViewMarks />

  </>
  )
}
