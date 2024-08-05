// import '../../App.css';
// import { useEffect } from 'react';
// import LandingContact from '../LandingContact/LandingContact';
// import Nav from '../navbar/Nav';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from '../account/Login';
// import MySwiper from '../swiper/swiper';
// import Marquee from '../Marque/Marque';
// import InfoSections from '../InfoSection/InfoSections';
// import Contact from '../contact/Contact';
// import Footer from '../footer/Footer';
// import AboutUs from '../navbar/About us/AboutUs';
// import { One } from '../services/onemonth/One';
// import useLocomotiveScroll from '../../useLocomotiveScroll';  // Import the custom hook

// function Home() {
//   useLocomotiveScroll();  // Apply the custom hook

//   return (
//     <div className="all-content"> 
//       <MySwiper />
//       <Marquee />
//       <InfoSections />
//       <Login />
//       <Contact />
//       <AboutUs />
//     </div>
//   );
// }

// export default Home;



import '../../App.css';  // Ensure this path is correct
import { useEffect } from 'react';
import MySwiper from '../swiper/swiper';  // Ensure this path is correct
import Marquee from '../Marque/Marque';  // Ensure this path is correct
import InfoSections from '../InfoSection/InfoSections';  // Ensure this path is correct
import Login from '../account/Login';  // Ensure this path is correct
import Contact from '../contact/Contact';  // Ensure this path is correct
import Footer from '../footer/Footer';  // If used, otherwise remove
import AboutUs from '../navbar/About us/AboutUs';  // Corrected path
import useLocomotiveScroll from '../../useLocomotiveScroll';  // Ensure this path is correct

function Home() {
  useLocomotiveScroll();  // Apply the custom hook

  return (
    <div className="all-content"> 
      <MySwiper />
      <Marquee />
      <InfoSections />
      <Login />
      <Contact />
      <AboutUs />
      {/* Include <Footer /> if needed */}
    </div>
  );
}

export default Home;
