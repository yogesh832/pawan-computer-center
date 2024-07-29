import './App.css'
import LandingContact from './components/LandingContact/LandingContact';
import Nav from './components/navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MySwiper from './components/swiper/swiper';
import Marquee from './components/Marque/Marque';
function App() {
  return (
    <>
<Nav/>
<LandingContact />
      <Marquee />
<MySwiper />
    </>
  )
}
export default App