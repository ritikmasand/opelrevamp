import React from 'react'
import bootstrap from 'bootstrap'
import img from '../../Assets/s1.png'
import ControlledCarousel from './ControlledCarousel'
import { Container } from 'react-bootstrap'
import NavBar from '../Shared/Navbar/Navbar'
import Fade from 'react-reveal/Fade';

const Aboutus = () => {
  return (
    <>
    <NavBar/>
    
    <Container className="pt-4"> 
    <Fade duration={3000} left>
     <h1 className="headerTitle text-center container">OPEL<span className="headerHighlight"> CONSULTANCY</span></h1>
     </Fade>
     <Fade duration={3000} right>
    <ControlledCarousel/>
    </Fade>
    
    <Fade duration={3000} left>
    <p className='headerContent mt-4 img-fluid container'>OPEL focuses on building a right mix of resources at village level, both with an urge to become entrepreneurs to one looking for local employment. Our Program Management team regularly identifies them and brings them together and support them in their dreams which are in line with our Vision. We believe in the concept of Village Level Entrepreneur who brings in seriousness in every piece of the work they deliver with proper guidance. OPEL has built a strong network or around 10000 plus resources which has a big chunk of woman workforce. We have been able to stops migration in many of the cases and brought in a urge for the learning technology which in turn will help in technology driven services execution at the farthest end of the country.</p>
   </Fade>
     </Container> 
    </>
  );
  }

export default Aboutus
