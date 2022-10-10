import React from 'react'
import "./Style.css";
import { useState } from "react";
import NavBar from './Shared/Navbar/Navbar';
import contactImg from "../Assets/contactus.png";
 import swal from 'sweetalert'
import Fade from 'react-reveal/Fade';
import { Col, Row } from 'react-bootstrap';

export const Contact2 = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: ""
    });

    const inputEvent = (e) => {
        // console.log(e.target.value);
        const name = e.target.name
        const value = e.target.value

        setData((preVal) => {

            return {
                ...preVal, [name]: value
            }
        })
    }

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`My Name is  ${data.fullName}. Mobile no. is ${data.phone} and Email is ${data.email}`);
    // }
    return (

        <>
             <NavBar/>
             <Fade duration={2000} right>
             <div style = {{backgroundColor: "rgb(190 178 255)"}}>
            <div className='my-5'>
            <h1 className="headerTitle text-center">CONTACT <span className="headerHighlight">US</span></h1>
            {/* <div className="headerContent container col-md-6 col-10 mx-auto check">
            <Col md={6}>
                        <Fade duration={2000} right>
                            <img src={contactImg} alt="" className="img-fluid"/>
                        </Fade>
                    </Col>
                    </div> */}
            </div>
            <div className='container contact_div'>
                <div className='row' style = {{backgroundColor: "rgb(190 178 255)"}}>
                    <div className='col-md-6 col-10 mx-auto check'>
                        <form action="" >
                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name='fullName' value={data.fullName} onChange={inputEvent} />
                            </div>
                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="phone" className="form-control" id="exampleFormControlInput1" placeholder="Mobile" name='phone' value={data.phone} onChange={inputEvent} />
                            </div>
                            
                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={data.email} onChange={inputEvent} />
                            </div>
                            <p>Are you representing an individual or a company?</p>
                            <div class="form-check">
                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                     <label class="form-check-label" for="flexRadioDefault1">
                       Individual
                           </label>
                            </div>
                            <div class="form-check">
                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Company
                                </label>
                                </div>
                                <br>
                                </br>
                                <p>I am intrested in?</p>
                                                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled"/>
                            <label class="form-check-label" for="flexCheckDisabled">
                                Software Development
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
                            <label class="form-check-label" for="flexCheckCheckedDisabled">
                                Hydroponics
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
                            <label class="form-check-label" for="flexCheckCheckedDisabled">
                                Talent Development
                            </label>
                            </div>
                                <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">State/UT</label>
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your State/UT" name='fullName' value={data.fullName} onChange={inputEvent} />
                            </div>
                            <div className="mb-3 ">
                                <label to="exampleFormControlInput1" className="form-label">Country</label>
                                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Country" name='fullName' value={data.fullName} onChange={inputEvent} />
                            </div>
                            <div className="mb-3">
                                <label to="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={data.message} onChange={inputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-dark" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            </Fade>
        </>
    )
}
export default Contact2;
