import React from 'react'
import Navbar from '../navbar/navbar';
import EditProfile from './editProfile';
import ChangePwd from './ChangePwd';
import peopleData from '../../data/peopleData';


const Profile = () => {
  
  const data = peopleData[0];

  return (
    <>
    
    <Navbar/>

    <div className='marginRight d-flex justify-content-center align-items-center flex-column p-3'>

        <h1 className='mb-5'>Your Profile</h1>

        <div className='d-flex justify-content-center align-items-center flex-lg-row flex-column p-3 w-100'>
          
          <img src={data.img} alt="img" className='rounded-lg' style={{width : '200px'}}/>

          <div className='h5 text-primary m-5'>

            <p> Name : <span className='text-success'> {data.name} </span> </p>
            <p> Email id : <span className='text-success'> {data.email} </span></p>
            <p> Phone : <span className='text-success'> {data.phone} </span> </p>
            <p> Password : <span className='text-success'> {data.password} </span></p>
            <p> Role : <span className='text-success'> {data.role} </span></p>

          </div>
        </div>

      <div className='w-100 text-center'>

        <button type="button" className="btn btn-primary btn-lg m-3" data-bs-toggle="modal" data-bs-target="#editProfile" >Edit Profile</button>
        <button type="button" className="btn btn-secondary btn-lg m-3" data-bs-toggle="modal" data-bs-target="#cngPwd">Change Password</button>
        
      </div>

        <EditProfile/>       
        <ChangePwd/>

    </div>

    </>
  )
}

export default Profile
