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
import { Three } from '../services/threemonth/Three'
import { Six } from '../services/sixmonth/Six'
import { Twelve } from '../services/twelvemonth/Twelve'
import { Eighteen } from '../services/eighteenmonth/Eighteen'
import { Twentyfour } from '../services/twentyfourmonth/Twentyfour'
import Result from './Result/Result'
// import NewUser from '../NewUserWithoutSub/newUser'
import Courses from './Courses'
import Admin from '../account/Admin'


// import StudentTable from './Student section/StudentTable'

export const Dashboard = () => {
  return (
    <>

    <div className='flex flex-row'>
    {/* <ViewCertificate/> */}
  <Sidebar />  
 <ControlPanel /> 
  {/* <MarketingTools />  */}
    {/* <CenterMessage /> */}
    {/* <AddStudent/> */}
    {/* <PracticeCRUD /> */}
   {/* <Addfund/>  */}
   {/* <Login/> */}
   {/* <StudentDashboardUI /> */}
   {/* <Courses /> */}
   
   {/* <ViewCertificate /> */}
   {/* <Result /> */}
   {/* <NewUser /> */}
   {/* <Admin /> */}

   {/* <Addstudentfee/> */}
   {/* <Viewstudentfee/> */}
   {/* <Passbook/> */}
   {/* <Student /> */}

   {/* <StudentDashboardUI /> */}
   {/* <Imageview /> */}
   {/* <Three /> */}
   {/* <Six /> */}
   {/* <Twelve /> */}
   {/* <Eighteen /> */}
   {/* <Twentyfour /> */}
  </div>
  {/* <StudentTable/> */}
  {/* <AddMarks /> */}
 {/* <ViewMarks /> */}

  </>
  )
}

