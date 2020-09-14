import React,{useState,useEffect} from 'react';
import firebase from 'firebase';
import fire from '../Fire';
import './Form.css';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Formc() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[date,setDate]=useState('');
  const[time,setTime]=useState('');
  const[seats,setSeats]=useState('');
  const[type,setType]=useState('');
  const[number,setNumber]=useState('');
  const[reservation, setReservation]=useState([]);


 

  const handleBooking =(event)=>{
    event.preventDefault();
    var user=fire.auth().currentUser;
    var uid=user.uid;
       const bookingsref=fire.database().ref('bookings'+uid);
       const bookings={
      name,
      email,
      date,
      time,
      seats,
      type,
      number,
       }
      
     bookingsref.push(bookings);
    
      toast.success("Reservation success !");
}
  
  
  return (
    <div >
    <div className="text-center">
    <h1 className="text-white">
 		      Make your Reservation
    </h1>
    </div>

  <Form className="container mr-0" type="submit">
  <Row form>
  <Col md={3}>
 		<FormGroup>
        <Label for="Name" className="text-white">Name</Label>
        <Input 
        className="" 
        value={name}
        required
         onChange={(e)=>setName(e.target.value)}
        id="name" 
        placeholder="Enter Your Name"

         />
      </FormGroup>
   </Col>
    <Col md={3}>      
      <FormGroup>
        <Label for="email" className="text-white">Email</Label>
        <Input type="email" 
        value={email} 
        id="email" 
        required
        placeholder="Enter Your Email"
        onChange={(e)=>setEmail(e.target.value)}
         />
      </FormGroup>
    </Col>
 </Row>
       <FormGroup>
        <Label for="phone" className="text-white">PhoneNumber</Label>
        <Input 
        className="w-25" 
        value={number}
         id="Number" 
         required
         placeholder="Enter Your Number" 
          onChange={(e)=>setNumber(e.target.value)}
         />
      </FormGroup>
 <Row form>
  <Col md={3}>
      <FormGroup>
        <Label for="Date" className="text-white">Date</Label>
        <Input
         type="date"
         value={date} 
         id="date" 
         placeholder=""
         required
        onChange={(e)=>setDate(e.target.value)}
          />
      </FormGroup>
  </Col>
   <Col md={3}>    
       <FormGroup>
        <Label for="Time" className="text-white">Time</Label>
        <Input 
        type="time"
        value={time} 
        id="time" 
        required
        placeholder="" 
        onChange={(e)=>setTime(e.target.value)}
        />
      </FormGroup>
      </Col>
  </Row>    
      <FormGroup>
        <Label for="reserve" className="text-white"> No.of seats?</Label>
        <Input className="w-25" value={seats} name="Reserve" id="Reserve" value={seats}
          
          
          placeholder=" No.of seats?"
          required
         onChange={(e)=>setSeats(e.target.value)}
          />
      </FormGroup>
      <FormGroup>
        <Label for="reservetype" className="text-white">Reservation For?</Label>
        <Input  className="w-25" type="text" value={type} name="ReserveType" id="ReserveType"
          placeholder="Reservation For?"
          required
         onChange={(e)=>setType(e.target.value)}
         />
        
      </FormGroup>
      
      <Button color="danger" type="submit" onClick={handleBooking}>Book</Button>
     
 		  </Form>
      <ToastContainer />
    </div>
  );
}

export default Formc;
