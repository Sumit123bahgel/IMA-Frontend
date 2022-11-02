import React, { useState } from 'react';
import axios from 'axios';
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
  
    
    async function handleSubmit(event){
        event.preventDefault();
        let {email , password } = emailPwd;

        if(email !== 'hello@gmail.com' && password === 'Hello123'){
          setIsWrong((prev)=>{
            return {
              ...prev,
              email : 'Please provide correct Email Id'
            }
          })
          return;
        }else if(email === 'hello@gmail.com' && password !== 'Hello123'){
          setIsWrong((prev)=>{
            return {
              ...prev,
              password : 'Please provide correct password'
            }
          })
          return;
        }else if(email !== 'hello@gmail.com' && password !== 'Hello123'){
          alert("Please Provide correct Information!");
          return;
        }
        
        const url = 'https://floating-forest-60538.herokuapp.com/v1/auth/login';

        const response = await axios.post(url, {email : emailPwd.email , password : emailPwd.password});
        if(response.status === 200){

          localStorage.setItem("token", response.data.tokens.access.token );
          localStorage.setItem("refreshToken", response.data.tokens.refresh.token);

          let path = email.length > 0 && password.length > 0 ? '/dashboard':'/';

          navigate(path);
          
        }
        
    }

    

  return (
    
    <div className='h-full d-flex justify-content-center align-items-center flex-column'>
      <h1>Login</h1>
      <form className='d-flex justify-center flex-column w-50' onSubmit={handleSubmit}>

        <div className="mb-3">
          <Label for = "email" content = "Email Address" />

          <Input type="email" name="email" className="form-control"  areaDesBy="emailHelp" value={emailPwd.email} onChange={handleChange} placeholder='Enter Your Email id'/>

          <p className='text-warning'>{isWrong.email}</p>
        </div>


        <div className="mb-3">
          <Label for="password" content = 'Password' />

          <Input type="password" name="password" className="form-control" value={emailPwd.password} onChange={handleChange} placeholder='Password'/>

          <p className='text-warning'>{isWrong.password}</p>

        </div>


        <div className="mb-3">

          <span className='card-link text-capitalize text-primary' style={{cursor : 'pointer'}} data-bs-toggle="modal" data-bs-target="#forgotPassword">Forgot password?</span>

          <Forgotpwd/>
        </div>


        <button type="submit" className="btn btn-primary btn-lg">Login</button>

      </form>
    </div>
  )
}

export default Login
