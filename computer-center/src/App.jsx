import './App.css'
import LandingContact from './components/LandingContact/LandingContact';
import Nav from './components/navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/account/Login';
import MySwiper from './components/swiper/swiper';
import Marquee from './components/Marque/Marque';
import InfoSections from './components/InfoSection/InfoSections';
import Contact from './components/contact/Contact';
import  Footer  from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutUs from '../src/components/navbar/About us/AboutUs'
import { One } from './components/services/onemonth/One';
function App() {
  return (
    <>
    <LandingContact />
<Nav/>
{/* <MySwiper />
 <Marquee/>
<InfoSections />
<Login /> 
 <Contact /> 
<AboutUs /> */}
<One />
<Footer />
    </>
  )
}
export default App



// note: first install:- npm install @mui/material @emotion/react @emotion/styled