import '../../App.css';  
import MySwiper from '../swiper/swiper';  
import Marquee from '../Marque/Marque';  
import InfoSections from '../InfoSection/InfoSections';  
import useLocomotiveScroll from '../../useLocomotiveScroll';  

function Home() {
  useLocomotiveScroll();  

  return (
    <div className="all-content"> 
      <MySwiper />
      <Marquee />
      <InfoSections />
    </div>
  );
}

export default Home;
