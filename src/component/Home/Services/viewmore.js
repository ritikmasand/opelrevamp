import React from "react";
import { useParams } from "react-router-dom";
import reactSyntaxHighlighter from "react-syntax-highlighter";
import data from "./servicedata.json";
import NavBar from "../../Shared/Navbar/Navbar";
import Fade from "react-reveal/Fade";
function Viewmore() {
  const param = useParams();
  return (
    <>
      <NavBar />
     <h1 className="headerTitle text-center ">FARMING AND<span className="headerHighlight"> CONSULTANCY</span></h1>
    <div> 
    <div style = {{background:"#f9f6f9"}}>
    <Fade duration={2000} left>
      <p className="headerContent container" style = {{ paddingTop: 50,fontSize:27,color: "#060100"}}> Nowafarms.in is a 100% Indian brand of hydroponic end-to-end farming systems, designed and manufactured in India by us for Indian growers.
      </p>
      </Fade>
      <Fade duration={2000} right> 
      <p className="headerContent container" style = {{ paddingTop: 50,fontSize:27,color: "#060100"}}> The project stems from a passion for soil-less farming and a common need for all growers: getting the most out of their plants.
</p>
      </Fade>
    </div>
    </div>
    </>
  );
}

export default Viewmore;
