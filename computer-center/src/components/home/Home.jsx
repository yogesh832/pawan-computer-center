import '../../App.css';  
import MySwiper from '../swiper/swiper';  
import Marquee from '../Marque/Marque';  
import InfoSections from '../InfoSection/InfoSections';  
import { Dashboard } from '../Dashboard/Dashboard';
import Centersection from '../Dashboard/centersection/Centerdocument';
import CenterMessage from '../Dashboard/CenterMessage/CenterMessage';
import MarketingTools from '../Dashboard/Marketing Tool/MarketingTool';
import Login from '../account/Login';
import AboutUs from '../navbar/About us/AboutUs';
import Contact from '../contact/Contact';



function Home() {
    

  return (
    <div className="all-content"> 
     {/* <MySwiper /> 
       <Marquee /> 
      <InfoSections />
    <Contact />
    <Login/>
    <AboutUs/>  */}


<Dashboard />

       {/* <Centersection />
       <CenterMessage /> 
     <MarketingTools />  */}
     {/* 9520082308 */}
    </div>
  );
}

export default Home;
