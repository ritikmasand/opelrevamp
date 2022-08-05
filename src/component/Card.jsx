import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { NavLink } from "react-router-dom";
import newservice from "./newservice";
import Fade from 'react-reveal/Fade';

const Card = (props) => {
    const { admin, setSelectedService } = useContext(UserContext)
    const {name, price, description, img} = newservice;
    console.log(newservice);
    function getId(name){
        var a=name.toLowerCase().split(' ').join('-');
        console.log(a);
    }
    console.log(props);
  return (
    <>
    
      <div className="col-md-4 col=10 mx-auto">
        <div className="card">
        <Fade duration={3000} left>
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          </Fade>
          <div className="card-body">
          <Fade duration={3000} left>
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            </Fade>
            <p className="card-text">{props.description}</p>
            <Link className="serviceLink" to={props.link}>
            <Fade duration={3000} left>
            <button className="bookingBtn" 
                            onClick={() => setSelectedService(newservice)}
                            >View more</button>
                            </Fade>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
