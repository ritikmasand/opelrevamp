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
                            <p className="headerContent">Opel started with a passion to bring excellent Products through robust software within the reach of every company.
It saw its initiation in 2012 as a privately held software company with office in Bangalore, India. We set out to help modern organizations and governments transform their relationships with their clients,employees and customers with its out-of-the-box, configurable and scalable enterprise-class solutions deployed on the cloud or on premise.</p>
                            {/* <button className="branBtn">learn More</button> */}
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;