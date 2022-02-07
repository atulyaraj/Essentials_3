import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Footer from'./Footer';
import Register from './Register';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KQ6gsSFvyq6MICKxnoGh1t2KdkE51qI1biu0ATWni7vfJDul7j6WIT538EReFdWH5EUkKbP4p9fUrsKb6VPwezn00mseIrWx3');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log('The user is >>>>', authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
      
      <Switch>
      <Route path="/login">
        
      
        <Login/>
        </Route>
        <Route path="/payment">
        
        <Header/>
        <Elements stripe ={promise}>
        <Payment/>
        </Elements>
        
        
        </Route>
      <Route path="/checkout">
      <Header/>
      
      <Checkout />
    
      </Route>
      <Route path="/">
      <Header/>
      <Home/>
      </Route>
      
      </Switch>
      
    </div>
    
    </Router>
    
  );
}

export default App;
