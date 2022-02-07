import React, { useState } from 'react';
import './Login.css';
import logo from './logo.png'
import { Link , useHistory} from "react-router-dom";
import { auth } from "./firebase";

function Register() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName]= useState('');
    const signIn = e=>{
        e.preventDefault();
        /////firebase login
        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
          history.push("/")
        })
        .catch(error =>alert(error.message))
    }

  return (<div className='login'>
  <Link to="/"><img src={logo} className='login_logo' alt=""/>
    </Link>

  <div className='login_container'>
      <h1>Sign-in</h1>
      <form>
          <h5>Name</h5>
          <input type="text" value={name} onChange={e => setName(e.target.value)}/>

          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

          <button type='submit' onClick={signIn} 
          className='login_signInButton'>Sign In</button>
      </form>
      <p>
          By signing-in you agree to Essential's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
      </p>
      
      </div>  
</div>)
}

export default Register;
