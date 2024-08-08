import React from 'react'

import ControlPanel from './pannel/ControlPanel'
import Sidebar from './Sidebar'
import MarketingTools from './Marketing Tool/MarketingTool'
import Addfund from './AccountSection/Addfund'
import Addstudentfee from './AccountSection/Addstudentfee'
import Viewstudentfee from './AccountSection/Viewstudentfee'
import Passbook from './AccountSection/Passbook'
import CertificateRequisition from './CertificatesFile/CertificateRequisition'
import TrackCertificate from './CertificatesFile/TrackCertificate'
import ViewCertificate from './CertificatesFile/ViewCerticate'



export const Dashboard = () => {
  return (
    <>
    {/* <div style={{display: 'flex', Height: '100vh'}}>
  <Sidebar />  
 <ControlPanel />
  </div>
  <MarketingTools /> */}

  {/* <Addfund /> */}
  {/* <Addstudentfee /> */}
  {/* <Viewstudentfee /> */}
  {/* <Passbook />  */}
  <CertificateRequisition />
  <TrackCertificate />
  
  </>
  )
}
