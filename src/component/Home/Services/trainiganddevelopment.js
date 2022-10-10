import React from 'react'
import NavBar from "../../Shared/Navbar/Navbar";
import Fade from 'react-reveal/Fade';
import ControlledCarousel from '../../aboutUs/ControlledCarousel';

function trainiganddevelopment() {
  return (
    <>
    
    <NavBar/>
    <h1 className="headerTitle text-center">TRAINING AND<span className="headerHighlight"> DEVELOPMENT</span></h1>
    <ControlledCarousel/>
   
    <div style = {{background:"#f9f6f9"}}>
    <Fade duration={2000} left>
    <div className='headerContent container'style = {{ paddingTop: 50,fontSize:23,color: "#060100"}}> 
    
    Our training programs do not feature generic, templated training content. We personalize content and delivery models based on your requirements, batch profiling, specific inputs and more.
    </div>
    </Fade>
    </div>
    </>
  )
  
}

export default trainiganddevelopment
