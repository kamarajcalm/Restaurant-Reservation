import React ,{ useState,useEffect }from 'react';
import Navbar from './Navbar';
import Form from './Form';
import ReservationList from './ReservationList';



function Main() {
	const [page, setPage] = useState(0);

   
	
  return (
    <div> 
      <Navbar setPage={setPage}/>
      {page === 0? <Form setPage={setPage}/> :null}
      {page === 1? <ReservationList/> :null}
     
    </div>
  );
}

export default Main;