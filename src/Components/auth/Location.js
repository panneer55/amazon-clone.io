import React from 'react';
import "./Location.css";
import { Link, useHistory } from 'react-router-dom';

function Location() {
    const history = useHistory();

    const submitHandler =(e)=>{
        e.preventDefault();
        history.push("/");
    }
    return (
        <div className ="location">
             <Link to="/">
            <img className="amazon_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="Login_logo" />
            </Link>
            <div className="location_container">
            <h1>Shipping Address</h1>
            <form>
            <label htmlFor="location">Enter Your Location</label>
            <input type="text" id="location" required />
            <button type="submit" onClick={submitHandler}>Continue</button>
            </form>
            </div>
            
            
            
        </div>
    )
}

export default Location
