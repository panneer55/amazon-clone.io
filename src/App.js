import React, { useEffect } from "react";
import {BrowserRouter as Router, Switch , Route, useHistory} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import CheckOut from "./Components/CheckOut/CheckOut";
import Login from "./Components/auth/Login";
import Location from "./Components/auth/Location";
import Payment from "./Components/payment/Payment";
import Orders from "./Components/order/Orders";
import { auth } from "./Components/helper/firebase";
import { useStateValue } from "./Components/Store/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51JY7JcSDMgQGMZzMRy5nNy2j8DB9Kr8OXYppN9S12XgZRlH273cSCya5az2y5CSjnxWmfhACqHhBkOOuaVQ2J62T001dUNo10B");

function App() {
  const[{},dispatch] = useStateValue();
  const history = useHistory();
 useEffect(()=>{
   auth.onAuthStateChanged(authUser=>{
     if(authUser) {
       dispatch({
         type:"SET_USER",
         user: authUser
       })
    
     }else{
         dispatch({
           type:"SET_USER",
           user: null
         })
     }
   })

 },[])
  return (
    <Router>
      <>
      <div className="app">
        <Switch>
        <Route path="/login">
            <Login/>
          </Route>
          <Route path="/location">
            <Location/>
          </Route>
          <Route path="/orders">
              <Header/>
              <Orders/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe = {promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header/>
            <CheckOut/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
      </>
    </Router>
    
  );
}

export default App;
