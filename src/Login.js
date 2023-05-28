import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import {auth} from './firebase'

function Login() {
  const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {
        console.log('Sign in')
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
          console.log('Sign in1')
          navigate('/')
        })
        .catch(e=>alert(e.message))
    }

    const register = () => {
        console.log('create an account')
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=> {
          if(auth){
            navigate('/')
          }
        })
        .catch((error)=>alert(error.message))
    }

  return (
    <div className='login'>
      <Link to='/'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGykU-ILgRgSRBx-DfAHQzCqInSfVHil7uw&usqp=CAU'
        className='login__logo'
        alt='logo' />
       </Link>
       <div className='login__container'>
        <div>
        <div className='form__container'>
            <h1> Sign In</h1>
            <h5>E-mail</h5>
            <input type='text' 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password'
            value={password} 
            onChange={e=>setPassword(e.target.value)}/>

            <button className='login__signin' 
            onClick={signIn}> SignIn</button>

            <p>By Signing in you have accepted our terms and conditions of Use & Sale.
                Please see our Privacy Notice, our Cookies Notice & our Interest-Based 
                Ads Notice </p>

                </div>
        </div>
        
        <button className='login__signup' onClick={register}>Create an Account</button>
        </div>
       
    </div>
  )
}

export default Login
