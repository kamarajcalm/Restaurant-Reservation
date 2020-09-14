import React,{useState,useEffect} from 'react';
import fire from '../Fire';
import Details from './Details';
function ReservationList(){

  const[reservation,setReservation]=useState([]);

  useEffect(()=>{
    //runs once when the app gets loaded
     var user=fire.auth().currentUser;
    var uid=user.uid;
   const bookingsref=fire.database().ref('bookings'+uid);
   bookingsref.on('value',(snapshot)=>{
    const bookings=snapshot.val();
    const details= [];
    for(let id in bookings){
      details.push({id,...bookings[id]});

    }
    setReservation(details);
    });
  },[]);
return(

      <div>

         {reservation? reservation.map((details,index)=><Details details={details} key={index}/>):''}
          
        

      </div>
  );


}

export default ReservationList;