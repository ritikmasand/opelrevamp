import React from "react";
import Sdata from './Sdata';
import Card from "./Card";
import NavBar from "./Shared/Navbar/Navbar";

const newservice = () => {
  return (
    <>
    <NavBar/>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
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
