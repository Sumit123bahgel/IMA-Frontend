import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Label } from '../../components/formComponents';

const Forgotpwd = () => {
  const [email,setEmail] = useState('');
    const [succesmsg,setSuccess] = useState('');
    const [login, setLogin] = useState(true);

    function handleClick(event){
      if(email.length > 10){
        setSuccess("we have sent a message on your gmail account!");
        setLogin(false)
      }else{
        setSuccess("Please provide valid email address!");
      }
      event.preventDefault();
    }

    function handleChange(event){
      const value = event.target.value;
      setEmail(value);
    }

    const navigate= useNavigate();
    
    function Loginpage(){
        let path  = '/';
        navigate(path);
    }



  return (
    <div className='h-full d-flex justify-content-center align-items-center flex-column'>

      <div className='d-flex justify-center text-center align-items-center flex-column w-50 form-group'>
        
        <Label for='email'  className="col-form-label col-form-label-lg text-center text-capitalize mb-5 h2" content= "Email address"/>

        <Input type="email" name='email' value={email} onChange={handleChange} className="form-control p-3 mb-5"  placeholder="Enter your email address"/>

        <button className="btn btn-primary w-50 my-2" onClick={handleClick}>Send a mail</button>

        <button className="btn btn-secondary w-50 my-2" disabled = {login} onClick={Loginpage}>login</button>

        <p className="text-capitalize text-success h4">
          {succesmsg}
        </p>

      </div>

    </div>
  )
}

export default Forgotpwd
