import React from 'react';
import './SignIn.css';

const SignUp=(props)=> {

  const{ email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    emailError,
    passwordError} =props;
  return (
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
        <form>
    		<div className="inputSBox">

    		   <input className="inputS" type="text" placeholder="Enter Your Name"/>
          
        
    		</div> 
    		<div className="inputSBox">
    		    <input 
            className="inputS" 
            type="email" 
            placeholder="Enter Your Email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}

            />
    		</div> 
        <div className="inputSBox">
           <input 
           className="inputS" 
           type="password" 
           placeholder="Enter Your password"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           />
        </div> 
          
        
    		<div className="text1"></div> 
    		<div className="bi">
    		<div className="btnAuth" type ="submit" onClick={handleSignUp}>SignUp</div>
    		</div>
        </form>
 		<div className="borderBox">
 			<div className="line"/>
 			
 			</div>
 			<div className="text1"></div> 
    		<div className="">
    		
    		</div>
 		</div>  
    	</div>
    	 
    </div>

  );
}

export default SignUp;