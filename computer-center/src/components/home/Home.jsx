import '../../App.css';  
import MySwiper from '../swiper/swiper';  
import Marquee from '../Marque/Marque';  
import InfoSections from '../InfoSection/InfoSections';  
import useLocomotiveScroll from '../../useLocomotiveScroll';  
import { Dashboard } from '../Dashboard/Dashboard';
function Home() {
  useLocomotiveScroll();  

  return (
    <div className="all-content"> 
    
             <Dashboard></Dashboard>
            <MySwiper />
      <Marquee />
      <InfoSections />  
    </div>
  );
}

export default Home;
