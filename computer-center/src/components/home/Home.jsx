import '../../App.css';  
import MySwiper from '../swiper/swiper';  
import Marquee from '../Marque/Marque';  
import InfoSections from '../InfoSection/InfoSections';  
import useLocomotiveScroll from '../../useLocomotiveScroll';  
import Sidebar from '../Dashboard/Sidebar';

function Home() {
  useLocomotiveScroll();  

  return (
    <div className="all-content"> 
     {/* <MySwiper /> */}
      {/* <Marquee /> */}
      {/* <InfoSections /> */}

      <Sidebar />
    </div>
  );
}

export default Home;
