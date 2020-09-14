import React,{useState} from 'react';
import fire from '../Fire';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function Details({details}){



	  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[date,setDate]=useState('');
  const[time,setTime]=useState('');
  const[seats,setSeats]=useState('');
  const[type,setType]=useState('');
  const[number,setNumber]=useState('');

	 const [modal, setModal] = useState(false);
     const toggle = () => setModal(!modal);


	const deleteDetails=()=>{
		var user=fire.auth().currentUser;
        var uid=user.uid;
		 const bookingsref=fire.database().ref('bookings'+uid).child(details.id);
		 bookingsref.remove();
		 toast.error("deleted successfully!");


	}
	const handleUpdate =()=>{
		const updates={
	  name,
      email,
      date,
      time,
      seats,
      type,
      number,
		}
		var user=fire.auth().currentUser;
        var uid=user.uid;
        const bookingsref=fire.database().ref('bookings'+uid).child(details.id);
        bookingsref.update(updates);
        toast.success("updated successfully")


	}
	return(
			<div>
              
              <ToastContainer />



              
              <Row>
      <Col sm="3">
         
        <Card body>
          <CardTitle className="text-center"><strong><h3>Reservation Details</h3></strong></CardTitle>
          <CardText>
          	<p><strong>Name:</strong>{details.name}</p>
          	<p><strong>Email:</strong>{details.email}</p>
          	<p><strong>PhoneNumber:</strong>{details.number}</p>
              <p><strong>Date:</strong>{details.date}</p>
              <p><strong>Time:</strong>{details.time}</p>
              <p><strong>Seats:</strong>{details.seats}</p>
              <p><strong>Reservation For:</strong>{details.type}</p>
          </CardText>
          <Button color="danger" onClick={deleteDetails}>Delete</Button>
          
          <Button color="primary" onClick={toggle}>update</Button>
          <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <label>Name</label>
          <input type="text" placeholder="edit name" onChange={(e)=>setName(e.target.value)}/>

          <label>Email</label>
          <input type="email" placeholder="edit email" onChange={(e)=>setEmail(e.target.value)}/>

          <label>Number</label>
          <input type="number" placeholder="edit number" onChange={(e)=>setNumber(e.target.value)}/>

          <label>Date</label>
          <input type="date" placeholder="edit date" onChange={(e)=>setDate(e.target.value)}/>

          <label>Time</label>
          <input type="time" placeholder="edit time" onChange={(e)=>setTime(e.target.value)}/>

          <label>Seats</label>
          <input type="text" placeholder="edit seats" onChange={(e)=>setSeats(e.target.value)}/>

          <label>Reservation for?</label>
          <input type="text" placeholder="edit Reservation for?"  onChange={(e)=>setType(e.target.value)}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>update</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
        </Card>
      
      </Col>

        <ToastContainer />
    </Row>
		

		

			</div>

		);
}

export default Details;