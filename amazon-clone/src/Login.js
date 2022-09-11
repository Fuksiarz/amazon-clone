import React, {useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import "./Login.css"
import { auth } from './Firebase';
function Login() {
    const navigate=useNavigate();

    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const signIn=e=>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                navigate('/');
            })
            .catch(error=>alert(error.message))

    }
    const register=e=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //if success
                console.log(auth);
                if(auth){
                    navigate('/')
                }
            })
            .catch(error=> alert(error.message))


    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"/>
            </Link>

            <div className='login_container'>

                <h1> Sign-in </h1>
                <form>


                    <h5>E-mail</h5>
                    <input type="text" value ={email} onChange={e=>setEmail(e.target.value)}/>


                    <h5>password</h5>
                    <input type="password" value ={password} onChange={e=>setPassword(e.target.value)}/>
                    <button
                        onClick={signIn}
                        type="submit"
                        className="login_signInButton">
                        Sign In
                    </button>

                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button
                    onClick={register}

                    className="login_registerButton">
                    Create your Amazon Account
                </button>

            </div>

        </div>
    );
}

export default Login;