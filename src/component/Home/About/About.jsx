import React from 'react';
import teamPic from '../../../Assets/about.svg';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section className="about overflow-hidden py-5">
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-6 img">
                        <Fade duration={2000} left>
                            <img src={`${teamPic}`} alt="" className="img-fluid"/>
                        </Fade>
                    </div>
                    <div className="col-md-6 ps-2">
                        <Fade duration={2000} right>
                            <p className="miniTitle">about us</p>
                            <h1 className="headerTitle">HOW WE CAN HELP YOUR <span className="headerHighlight">BUSINESS</span> GOAL</h1>
                            <p className="headerContent">Opel Consulting is an ISO 9001 – 2015 Certified Technology Implementation and Services Company founded in 2012 located in Bangalore, India - the IT hub of the World, backed by IT professionals with a combined experience of over five decades with the core objective to provide cost-effective, quality oriented technology implementation services in the ITES space to clients across the globe with a focus on Education and Health Care, especially to the rural areas.</p>
                            {/* <button className="branBtn">learn More</button> */}
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;