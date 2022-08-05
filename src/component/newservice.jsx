import React from "react";
import Sdata from './Sdata';
import Card from "./Card";
import NavBar from "./Shared/Navbar/Navbar";
import Fade from 'react-reveal/Fade';

const newservice = () => {
  return (
    <>
    <NavBar/>
      <div className="my-5">
      <Fade duration={2000} left>
        <h1 className="text-center">Our Services</h1>
        </Fade>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Sdata.map((val, index) => {
                  return <Card key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    link={val.link}
                  />
                })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default newservice;
