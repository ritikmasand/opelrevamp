import './../App.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Newcontact() {
    // function newcontact() {
        const [toSend, setToSend] = useState({
          from_name: '',
          to_name: '',
          message: '',
          reply_to: '',
        });
      
        const onSubmit = (e) => {
          alert("dsijd");
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
  console.log(toSend);
  return (
    <>
    <Form  onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>From Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e)=>{setToSend(prevstate=>({...prevstate,from_name:e.target.value}))}} value={toSend.from_name}/>

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>To</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e)=>{setToSend(prevstate=>({...prevstate,to_name:e.target.value}))}} value={toSend.to_name}/>
        {/* <Form.Control type="password" placeholder="Password" /> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e)=>{setToSend(prevstate=>({...prevstate,message:e.target.value}))}} value={toSend.message}/>
        {/* <Form.Control type="password" placeholder="Password" /> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>email id</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setToSend(prevstate=>({...prevstate,reply_to:e.target.value}))}} value={toSend.reply_to}/>
        {/* <Form.Control type="password" placeholder="Password" /> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Newcontact;
