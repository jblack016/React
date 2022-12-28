import React, { useState } from 'react';
import "../style/Login.css";
import { Link, useNavigate} from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {auth} from "./firebase";


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // SIGN IN //

    const signIn = e => {
        e.preventDefault();

        auth 
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate.push('/');
            })
            .catch(error => alert(error.message))
    }

    // REGISTRATION //

    const register = e => {
        e.preventDefault();

        auth 
            .createUserWithEmailAndPassword(email, password)
            .then((auth ) => {
                if(auth) {
                    navigate.push('/');
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login_logo">
                    <StorefrontIcon className='login_logoImage' fontSize='large' />
                    <h2 className='login_logoTitle'>Amazonish</h2>
                </div>
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>

                <form>

                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className='login_signInButton' onClick={signIn}>Sign In</button>

                </form>
                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login_registrationButton' onClick={register}>Create New Account</button>

            </div>
        </div>
    )
}

export default Login