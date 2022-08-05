import React from 'react'
import NavBar from "../../Shared/Navbar/Navbar";
import { Fade } from 'react-reveal';

function softwareanddevelopment() {
  const styleObj = {
    //fontSize: ,
   // color: "#4a54f1",
  // background:"#f7e5eb",
    margintop:"-50px",
   // paddingTop: "100px"
}
  return (
    <>
    <NavBar/>
    
    <h1 className="headerTitle text-center"style={styleObj}>SOFTWARE<span className="headerHighlight"> DEVELOPMENT</span></h1>
    <div style = {{background:"#f9f6f9"}}>
    <Fade duration={2000} left>
    <div className="headerContent container"style = {{ paddingTop: 50,fontSize:27,color: "#060100"}}>
    Whether it is new App for your business or a module that you desperately needed to solve a critical business problem, we have everything covered for you. Your ideas will get realized with us!
    </div>
    </Fade>
    {/* ?<br></br> */}
    <Fade duration={2000} right>
    <div className="headerContent container"style = {{ paddingTop: 50,fontSize:27, color: "#060100"}}>
We provide world class business and company applications with high customization as per our customers need! Our services and solutions are not only the best in market but are also competitive in price and that's the reason not only big names like Adani Wilmar, Aditya Birla, Infosys, Govt of Karnataka,Bosch and more, trusts us but very fresh and innovative startups also have a delightful experience with us! Check out some of our happy fresh startup partners who are growing their business on front line.

    </div>
    </Fade>
    </div>
    </>
  )
}

export default softwareanddevelopment
