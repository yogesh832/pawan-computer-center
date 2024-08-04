import './App.css';
import { useEffect } from 'react';
import LandingContact from './components/LandingContact/LandingContact';
import Nav from './components/navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/account/Login';
import MySwiper from './components/swiper/swiper';
import Marquee from './components/Marque/Marque';
import InfoSections from './components/InfoSection/InfoSections';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import AboutUs from './components/navbar/About us/AboutUs';
import { One } from './components/services/onemonth/One';
import useLocomotiveScroll from './useLocomotiveScroll';  // Import the custom hook

function App() {
  useLocomotiveScroll();  // Apply the custom hook

  return (
    <div className="all-content"> {/* Add the container for LocomotiveScroll */}
      <LandingContact />
      <Nav />
      <MySwiper />
      <Marquee />
      <InfoSections />
      <Login />
      <Contact />
      <AboutUs />
      <One />
      <Footer />
    </div>
  );
}

export default App;
