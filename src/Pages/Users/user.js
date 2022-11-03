import React, {useEffect} from 'react';
import Navbar from '../navbar/navbar';
import UserCard from './userCard.js';
import { Input } from '../../components/formComponents';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../../components/Loading';


const User = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const [result, setResult] = useState(null);

  function handleSearch(event){
    const value = event.target.value;
    if(value.length === 0){
      window.location.reload();
    }
    setSearch(value);
  }

  function handleClick(){
    if(search.length === 0){
      window.location.reload();
      return;
    }
    const token = localStorage.getItem('token');
    setLoading(true);

    axios.get('https://floating-forest-60538.herokuapp.com/v1/users?name=' + search,{
      headers: {Authorization : `Bearer ${token}`} 
    }).then(response => {setResult(response.data.results); setLoading(false)} );

  }


  

  useEffect(()=>{
    const token = localStorage.getItem('token');
    
    axios.get('https://floating-forest-60538.herokuapp.com/v1/users?role=user',{ 
      headers: {Authorization : `Bearer ${token}`} 
    }).then(response => {setResult(response.data.results); setLoading(false)} );

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

    <div className='p-2'>
      
      <div className='d-flex justify-content-between'>
        <h3 className='text-uppercase'>Users</h3>
        <div className='form-group d-flex justify-content-center align-items-center'>
          <Input type='text' placeholder='Search' className='form-control border' value={search} onChange={handleSearch}/>
          <span className='btn btn-dark' onClick={handleClick}>
            <i className="fa-solid fa-magnifying-glass"></i> 
          </span>
        </div>
      </div>
    
      <table className='table table-bordered table-hover table-responsive-lg mt-3 table-striped'>
        <thead>
          <tr>
            <th scope='col'> User Id </th>
            <th scope='col'> User Name </th>
            <th scope='col'> Email id </th>
            <th scope='col'> Invested </th>
          </tr>
        </thead>
        <tbody>
          {result.map((card,index)=>{
           return <UserCard
              cardId = {index}
              key = {index}
              user = {card}
           /> 
          })}
          

        </tbody>
      </table>          

    </div>
    </>
  )
}

export default User;
