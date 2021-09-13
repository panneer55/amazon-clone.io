import React from 'react';
import "./Login.css";
import {Link,useHistory} from "react-router-dom";
import { useState } from 'react';
import {auth} from "../helper/firebase";
function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=>alert(error.message))
    }
    const register = (e)=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push("/")
            }
        })
        .catch(error => alert(error.message))
    }
    


    return (
        <div className="login">
            <Link to="/">
            <img className="amazon_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="Login_logo" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" onChange={e=> setEmail(e.target.value)} value={email}/>
                    <h5>Password</h5>
                    <input type="password" onChange={e=> setPassword(e.target.value)} value={password} />
                    <button onClick={signIn}>Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                </p>
                <button onClick={register} className="signup_btn">Create your Amazon Account</button>
                <Link to="/location">
                <button className="skip_btn">Skip to continue</button>
                </Link>
            </div>

        </div>
    )
}

export default Login
