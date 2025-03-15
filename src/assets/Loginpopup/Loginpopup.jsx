import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import './Loginpopup.css'
import { storeContext } from '../Context/Context.jsx'
import axios from "axios"

const Loginpopup = ({setShowlogin}) => {
const {url, setToken} = useContext(storeContext)

    const [currstate, setCurrstate]=useState("Log In")
    const [data, setData] = useState({
      name:"",
      email:"",
      password:""
    })
  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async(event)=>{
    event.preventDefault()
    let newUrl = url;
    if(currstate === "Log In"){
        newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl,data);
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setShowlogin(false)
    }
    else{
      alert(response.data.message);
    }
  }

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin}  className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currstate}</h2>
                <FontAwesomeIcon style={{fontSize:'22px', cursor:"pointer"}} onClick={()=>{setShowlogin(false)}}icon={faXmark}/>
            </div>
            <div className="login-popup-inputs">
                {currstate === "Log In"?<></>:
              <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>}
              <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Your mail ID' required/>
              <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
            </div>
            <button type='submit'>{currstate==="Sign up"?"Create Account":"Log In"}</button>
             <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By Continuing, I Agree to the term of use & privacy Policy</p>
             </div>
             {currstate==="Log In"?
             <p>Create New Account ?<span onClick={()=>{setCurrstate("Sign up")}}>Click here</span></p>:
             <p>Already have an Account ?<span onClick={()=>{setCurrstate("Log In")}}>Login here</span></p>}
        </form>   
    </div>
  )
}

export default Loginpopup