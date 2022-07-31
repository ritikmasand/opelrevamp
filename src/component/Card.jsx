import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { NavLink } from "react-router-dom";
import newservice from "./newservice";

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
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <Link className="serviceLink" to={props.link}>
            
            <button className="bookingBtn" 
                            onClick={() => setSelectedService(newservice)}
                            >View more</button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
