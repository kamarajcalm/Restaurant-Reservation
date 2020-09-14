import React,{useState, useEffect} from 'react';
import fire from './Fire';
import firebase from 'firebase';
import Form from './components/Form';
import ReservationList from './components/ReservationList';
import { Button } from 'reactstrap';
import './App.css';
import Navbar from './components/Navbar';
import SignForm from './components/SignForm';
import SignUp from './components/SignUp';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
	const[user,setUser] = useState('');
	const[email, setEmail]= useState('');
	const[password, setPassword]= useState('');

 
		const clearInputs =()=>{
			setEmail('');
			setPassword('');
		}

		


		const handleLogin =() =>{
			
			fire
				.auth()
				.signInWithEmailAndPassword(email, password)
				.catch((err) => {
					switch(err.code){
						case "auth/invalid-email":
						case "auth/user-disabled":
						case "auth/user-not-found":
						    alert(err.message);
						    break;
						case "auth/wrong-password":
						    alert(err.message);
						    break;    
					}
				});
		};

		const handleSignUp =()=>{
		    
			fire
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.catch((err) => {
					switch(err.code){
						case "auth/email-already-in-use":
						case "auth/invalid-email":
					
						    alert(err.message);
						    break;
						case "auth/weak-password":
						    alert(err.message);
						    break;    
					}
				});




		}

   const handleLogout =() =>{
   	fire.auth().signOut();
   }

   const authListener =() =>{
   	 fire.auth().onAuthStateChanged((user) =>{
   	 	if (user){
   	 		clearInputs();
   	 		setUser(user);
   	 	}else{
   	 		setUser("");
   	 	}
   	 });
   };		

   useEffect(()=>{
   		authListener();
   },[])

  return (
   




    	<Router>
   
    	 {
    	 	user?(<Main />):( <Switch>
      



            <Route path="/SignUp">
            
            <SignUp 

            	email={email}
            	setEmail={setEmail}
            	password={password}
            	setPassword={setPassword}
            	handleLogin={handleLogin}
            	handleSignUp={handleSignUp}
            	
            />

            </Route>

            
               <Route path="/">
            
            <SignForm 
            	email={email}
            	setEmail={setEmail}
            	password={password}
            	setPassword={setPassword}
            	handleLogin={handleLogin}
            	handleSignUp={handleSignUp}
            	


            />

            </Route>
         
         
         

         
        </Switch>)
    	 }

    	 
    
</Router>
    

  )
}

export default App;
