import React from 'react'

import ControlPanel from './pannel/ControlPanel'
import Sidebar from './Sidebar'
import MarketingTools from './Marketing Tool/MarketingTool'
import CenterMessage from './CenterMessage/CenterMessage'
import AddStudent from './Studentsection/AddStudent'
import Addfund from './AccountSection/Addfund'
import Addstudentfee from './AccountSection/Addstudentfee'
import Viewstudentfee from './AccountSection/Viewstudentfee'
import Passbook from './AccountSection/Passbook'
import CertificateRequisition from './CertificatesFile/CertificateRequisition'
import TrackCertificate from './CertificatesFile/TrackCertificate'
import ViewCertificate from './CertificatesFile/ViewCerticate'
import AddMarks from './OfflineExamination/AddMarks'
import ViewMarks from './OfflineExamination/ViewMarks'

import PracticeCRUD from './practiceCRUD'
import Student from './Student'
import StudentDashboardUI from '../StudentDashboard/StudentDashboardUI'
import Imageview from '../Imageview'

// import StudentTable from './Student section/StudentTable'

export const Dashboard = () => {
  return (
    <>

    <div className='flex flex-row'>
  <Sidebar />  
 {/* <ControlPanel />  */}
  {/* <MarketingTools />  */}
    {/* <CenterMessage /> */}
    {/* <AddStudent/> */}
    {/* <PracticeCRUD /> */}
   {/* <Addfund/>  */}
   {/* <Addstudentfee/> */}
   {/* <Viewstudentfee/> */}
   {/* <Passbook/> */}
   {/* <Student /> */}

   {/* <StudentDashboardUI /> */}
   <Imageview />
  </div>
  {/* <StudentTable/> */}
  {/* <AddMarks /> */}
 {/* <ViewMarks /> */}

  </>
  )
}
