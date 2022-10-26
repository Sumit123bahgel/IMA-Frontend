import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Label, Input } from '../../components/formComponents';
import Forgotpwd from './forgotpwd';


const Login = () => {
    const [emailPwd , setEmailPwd] = useState({
        email : '',
        password : ''
    });

    const [isWrong, setIsWrong] = useState({
        email : '',
        password : ''
    });

    

    function handleChange(event){
        const {name, value} = event.target;
    
        setEmailPwd((prev)=>{
          return {
            ...prev,
            [name] : value
          }
        })
    }

    const navigate = useNavigate();
  
    
    function handleSubmit(event){
        let {email , password } = emailPwd;
        
        let path = email.length > 0 && password.length > 0 ? '/dashboard':'/';
        navigate(path);
        event.preventDefault();
    }


  return (
    
    <div className='h-full d-flex justify-content-center align-items-center flex-column'>
      <h1>Login</h1>
      <form className='d-flex justify-center flex-column w-50' onSubmit={handleSubmit}>

        <div className="form-group">
          <Label for = "email" content = "Email Address" />

          <Input type="email" name="email" className="form-control"  areaDesBy="emailHelp" value={emailPwd.email} onChange={handleChange} placeholder='Enter Your Email id'/>

          <p>{isWrong.email}</p>
        </div>


        <div className="form-group">
          <Label for="password" content = 'Password' />

          <Input type="password" name="password" className="form-control" value={emailPwd.password} onChange={handleChange} placeholder='Password'/>

          <p>{isWrong.password}</p>

        </div>


        <div className="form-group">

          <span className='card-link text-capitalize text-primary' style={{cursor : 'pointer'}} data-toggle="modal" data-target="#forgotPassword">Forgot password?</span>

          <Forgotpwd/>
        </div>


        <button type="submit" className="btn btn-primary btn-lg">Login</button>

      </form>
    </div>
  )
}

export default Login
