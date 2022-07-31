import React from "react";
import { useParams } from "react-router-dom";
import reactSyntaxHighlighter from "react-syntax-highlighter";
import data from "./servicedata.json";
function Viewmore() {
  const param = useParams();
  return (
    <>
     <h1 className="headerTitle text-center ">FARMING AND<span className="headerHighlight"> CONSULTANCY</span></h1>
    <div> 
      <p className="headerContent container" >{data[param.id]}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    </>
  );
}

export default Viewmore;