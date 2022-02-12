import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import About_us from './Components/About_us';
import FAQ from './Components/FAQ';
import Cards from './Components/Cards';
import Facility from './Components/Facility';
import Contact from './Components/Contact';
import NavbarComponent from './Components/NavbarComponent';
import Testimonial from './Components/Testimonial';
import Service_card from './Components/Service_card';
import Slider from './Components/Slider';
import Team from './Components/Team';
import './styles.css'

function App() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <div>
      <NavbarComponent />

      <Slider />

      <Service_card />

      <Cards />

      <About_us />

      <Team />

      <Facility />
      
      <Testimonial />

      <FAQ />

      <Contact />
    </div>
  );
}

export default App;
