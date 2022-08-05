import './../App.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import contactImg from "../Assets/contactus.png";
 import swal from 'sweetalert'
import Fade from 'react-reveal/Fade';
import { Col, Row } from 'react-bootstrap';
import NavBar from "./Shared/Navbar/Navbar";


function Newcontact() {
    // function newcontact() {
        const [toSend, setToSend] = useState({
          from_name: '',
          to_name: '',
          message: '',
          reply_to: '',
        });
      
        const onSubmit = (e) => {
          alert("Your details have been submitted successfully");
            // e.preventDefault();
            send(
              'service_q98qlos',
              'template_jrk7veh',
              toSend,
              'VHA8ueOWc4cExE2rR'
            )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
              })
              .catch((err) => {
                console.log('FAILED...', err);
              });
              e.preventDefault();
          };
      
        // const handleChange = (e) => {
        //   setToSend({ ...toSend, [e.target.name]: e.target.value });
        // };
  // return (
  //   <div className="newcontact">
      {/* <form onSubmit={onSubmit}>
  <input
    type='text'
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='to_name'
    placeholder='to name'
    value={toSend.to_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <button type='submit'>Submit</button>
</form> */}
  console.log("Your details have been submitted successfully");
  return (
    <>
    <NavBar/>
    <h1 className="headerTitle text-center">CONTACT <span className="headerHighlight">US</span></h1>
    <div className="headerContent container">
    <Col md={6}>
                        <Fade duration={2000} right>
                            <img src={contactImg} alt="" className="img-fluid"/>
                        </Fade>
                    </Col>
                    </div>
    <div className="headerContent container">
    <Form  onSubmit={onSubmit}>
    <Fade duration={2000} left>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Col md={12} lg={6}>
        <Form.Label>From Name</Form.Label>
        </Col>
        <Form.Control type="text" placeholder="Enter your Name" onChange={(e)=>{setToSend(prevstate=>({...prevstate,from_name:e.target.value}))}} value={toSend.from_name}/>

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>To</Form.Label>
        <Form.Control type="text" placeholder="Enter reciever's name" onChange={(e)=>{setToSend(prevstate=>({...prevstate,to_name:e.target.value}))}} value={toSend.to_name}/>
        {/* <Form.Control type="password" placeholder="Password" /> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        
        <Form.Control type="text" placeholder="Enter description" onChange={(e)=>{setToSend(prevstate=>({...prevstate,message:e.target.value}))}} value={toSend.message}/>
        {/* <Form.Control type="password" placeholder="Password" /> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>email id</Form.Label>
        <Form.Control type="email" placeholder="Enter your email id" onChange={(e)=>{setToSend(prevstate=>({...prevstate,reply_to:e.target.value}))}} value={toSend.reply_to}/>
        {/* <Form.Control type="password" placeholder="Password" /> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Fade>
    </Form>
    
    </div>
    </>
  );
}

export default Newcontact;
