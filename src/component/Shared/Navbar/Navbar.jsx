import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import PopOver from '../PopOver/PopOver';
import { UserContext } from '../../../App';


const NavBar = () => {
    const { user } = useContext(UserContext)
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth' });
    return (
        <Navbar className={`navbar navbar-expand-lg navbar-light ${isSticky ? "navStyle" : "navDefault"}`} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={scrollTop} className="navBrn">
                    <FontAwesomeIcon icon={faBuffer} className="brnIcon" /> Opel <span className="navHighlight">Consulting</span>
                </Navbar.Brand>
               {/* <br />
               <br />
               <br />
               <div style = {{ marginRight:80,marginTop:70, fontSize:7, color: "#060100"}}>Think opel.. Think Software, Talent development, farm solutions…
</div> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mainNav" activeKey="/home">
                    <Nav.Item>
                            <Nav.Link href="/Aboutus" className="nav-link">About us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="nav-link" onClick={() => window['scrollTo']({ top: 0, behavior: 'smooth' })}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Newservice" className="nav-link">Services</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/sponsors" className="nav-link">Partners and customers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/newcontact" className="nav-link">Contact Us</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link as={Link} to="/dashboard/profile" className="nav-link">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {
                                user.email ?
                                    <div>
                                        <PopOver />
                                    </div> :
                                    <Link to="/login">
                                        <button className="loginBtn">Login</button>
                                    </Link>
                            }
                        </Nav.Item> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;