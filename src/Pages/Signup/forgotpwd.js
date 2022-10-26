import React, { useState } from 'react';
import { Input, Label } from '../../components/formComponents';

const Forgotpwd = () => {
  const [email,setEmail] = useState('');
  const [succesmsg,setSuccess] = useState('');
  const [login, setLogin] = useState(true);  

    function handleClick(event){
      if(email.length > 10){
        setSuccess("we have sent a message on your gmail account!");
        setLogin(false);
      }else{
        setSuccess("Please provide valid email address!");
      }
    }

    function handleChange(event){
      const value = event.target.value;
      setEmail(value);
    }

  return (

    <div className="modal fade" id="forgotPassword" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Forgot Password</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            
            <div classNameName="form-group text-center">
      
              <Label for='email'  classNameName="col-form-label col-form-label-lg text-center text-capitalize mb-2 h2" content= "Email address"/>
      
              <Input type="email" name='email' value={email} onChange={handleChange} classNameName="form-control p-3"  placeholder="Enter your email address"/>
            </div>
      
            <p classNameName="text-capitalize text-success">
              {succesmsg}
            </p>
      
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" disabled={login}>Login</button>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Forgotpwd
