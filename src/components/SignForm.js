import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const SignForm=(props)=>{

	const{ email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignUp,
		emailError,
		passwordError} =props;

		
return(
 
     <div>
          <div className="authBox">
        <div className="leftbox">
             <div className="bgGreen"/>
             <div className="imageAuth" />
             <div className="imageText bold style1">MASALA CAFE</div>
             <div className="imageText style2">HAVE YOUR MEALS</div>
      </div>
      <div className="rightBox">
        <div className="box">
        <div className="titleAuth">Log into Masala Cafe</div>
        <div className="inputSBox">
           <input 
           className="inputS" 
           type="email" 
           placeholder="Email"
           required
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           />
        
        </div> 
        <div className="inputSBox">
           <input 
           className="inputS" 
           type="password" 
           placeholder="password"
           required
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           />
           <p>{passwordError}</p>
        </div> 
        <div className="text1"></div> 
        <div className="bi">
        <div className="btnAuth" onClick={handleLogin}>Login</div>
        </div>
    <div className="borderBox">
      <div className="line"/>
      <center><div className="text2 or">Don't have an account?</div></center>
      </div>
      <div className="text1"></div> 
        <div className="">
        <div className="btnAuth" ><Link to="/SignUp">Create Account</Link></div>
        </div>
    </div>  
      </div>
      </div>
         
        

     </div>

	)


}

export default SignForm;