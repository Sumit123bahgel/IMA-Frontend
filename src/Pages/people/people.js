import React,{useEffect, useState} from 'react';
import Navbar from '../navbar/navbar';
import { Input } from '../../components/formComponents';
import PeopleInfo from './peopleInfo';
import axios from 'axios';
import Loading from '../../components/Loading';


const Teams = () => {
  
  const [loading, setLoading] = useState(true);

  const [result, setResult] = useState([]);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    
    axios.get('https://floating-forest-60538.herokuapp.com/v1/users?role=admin',{ 
      headers: {Authorization : `Bearer ${token}`} 
    }).then(response => {
      if(response.status === 401){
        window.alert("Login Session has been expired. Please Login again!");
      }
      setResult(response.data.results); setLoading(false)} );

  },[]);

  if(loading ){
    return (
      <>
      <Navbar/>
      <Loading/>
      </>
    )
  }
  
  return (
    <>
    <Navbar/>
      <div className='marginRight p-2'>
        <div className='d-flex justify-content-between'>
          <h1 className='text-uppercase'>People</h1>
          <div className='form-group d-flex justify-content-center align-items-center'>
            <Input type='text' placeholder='Search' className='form-control border' />

            <span className='btn btn-dark'>
              <i className="fa-solid fa-magnifying-glass"></i> 
            </span>

          </div>
        </div>

        <table className='table table-responsive-lg table-hover table-bordered mt-3'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Id</th>
              <th scope='col'>Role</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
            </tr>
          </thead>
          <tbody>
            
            {result.map((card,index)=>{
              return <PeopleInfo
                key = {index}
                info = {card}
              />
            })}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Teams
