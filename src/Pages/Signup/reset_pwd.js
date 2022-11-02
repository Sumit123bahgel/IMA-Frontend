import axios from 'axios';
import React from 'react'
import {  useSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { Label, Input } from '../../components/formComponents'



const ResetPwd = () => {
    const [passwords, setPasswords] = useState({
        new_pwd : '',
        con_pwd : ''
    });

    function handleChange(event){
        const {name,value} = event.target;

        setPasswords((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
    }
    
    const [searchParams] = useSearchParams();
    const token =  searchParams.get("token");

    
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        let newPassword = passwords.new_pwd, conPassword = passwords.con_pwd;
        if(newPassword === conPassword){

            

            const response = await axios.post('https://floating-forest-60538.herokuapp.com/v1/auth/reset-password?token=' + token,{
                password : newPassword
            });

            if(response.status === 204){
                navigate('/');
            }else{
                window.alert("Token expired please try again!");
            }

        }else{
            window.alert("Passwords are not matching!");
        }

    }

  return (
    <div className='w-100 h-full d-flex justify-content-center align-items-center flex-column'>
      <h1>Reset Your Password</h1>
      <form className='w-50 m-2' onSubmit={handleSubmit}>
        
        <div className="mb-3">
            <Label for="new_pwd" content="New Password"/>
            <Input type="password" name="new_pwd" className="form-control" placeholder="Enter Old Password" value={passwords.new_pwd} onChange= {handleChange} />
        </div>

        <div className="mb-3">
            <Label for="con_pwd" content="Confirm New Password"/>
            <Input type="password" name="con_pwd" className="form-control" placeholder="Enter New Password" value={passwords.con_pwd} onChange= {handleChange} />
        </div>

        <button type="submit" className='btn btn-primary '>Reset</button>
        <button className='btn btn-secondary m-3' >Login</button>
      </form>

    </div>
  )
}

export default ResetPwd
