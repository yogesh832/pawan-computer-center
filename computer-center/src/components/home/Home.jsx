import '../../App.css';  
import MySwiper from '../swiper/swiper';  
import Marquee from '../Marque/Marque';  
import InfoSections from '../InfoSection/InfoSections';  
import useLocomotiveScroll from '../../useLocomotiveScroll';  
import { Dashboard } from '../Dashboard/Dashboard';
import Centersection from '../Dashboard/centersection/Centerdocument';
import CenterMessage from '../Dashboard/CenterMessage/CenterMessage';
import MarketingTools from '../Dashboard/Marketing Tool/MarketingTool';



function Home() {
  useLocomotiveScroll();  

  return (
    <div className="all-content"> 
     {/* <MySwiper /> 
       <Marquee /> 
      <InfoSections /> */}
      <Dashboard />
       {/* <Centersection />
       <CenterMessage /> 
     <MarketingTools />  */}
    </div>
  );
}

export default Home;
