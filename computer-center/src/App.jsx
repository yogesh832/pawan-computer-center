import './App.css'
import LandingContact from './components/LandingContact/LandingContact';
import Nav from './components/navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/account/Login';
import MySwiper from './components/swiper/swiper';
import Marquee from './components/Marque/Marque';
import InfoSections from './components/InfoSection/InfoSections';


function App() {
  return (
    <>
<Nav/>
<LandingContact />

{/* <Marquee />
<MySwiper /> */}
<InfoSections />
    </>
  )
}
export default App



// note: first install:- npm install @mui/material @emotion/react @emotion/styled