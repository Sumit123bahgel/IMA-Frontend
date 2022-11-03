import React,{useEffect, useState} from 'react';
import Navbar from '../navbar/navbar';
import InvestRow from './investRow';
import { Input } from '../../components/formComponents';
import axios from 'axios';
import Loading from '../../components/Loading'


const Investment = () => {
  
  const [loading, setLoading] = useState(true);

  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');


  function handleSearch(event){
    const value = event.target.value;
    if(value.length===0){
      window.location.reload();
    }
    setSearch(value);
  }

  function handleClick(){
    if(search.length===0){
      window.location.reload();
      return;
    }
    setLoading(true);
    const token = localStorage.getItem('token');

    try{

    
      axios.get('https://floating-forest-60538.herokuapp.com/v1/plans?planName=' + search,{
        headers: {Authorization : `Bearer ${token}`} 
      }).then(response => {

        axios.get('https://floating-forest-60538.herokuapp.com/v1/investments?planType=' + response.data.results[0].id,{
          headers: {Authorization : `Bearer ${token}`} 
        }).then(response => {
          if(response.status === 404){
            window.alert("Investments Not Found!");
          }
          setResult(response.data.results);
          setLoading(false);
        } );

      } );
    
    }catch(err){
      console.log(err);
    }

  }
  

  useEffect(()=>{
    const token = localStorage.getItem('token');
    
    axios.get('https://floating-forest-60538.herokuapp.com/v1/investments',{ 

      headers: {Authorization : `Bearer ${token}`} 

    }).then(response => {
      if(response.status === 401){
        window.alert("Login Session has been expired. Please Login again!");
      }
      setResult(response.data.results); setLoading(false);
    } );

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
        <h1 className='text-uppercase'>Investments</h1>
        <div className='form-group d-flex justify-content-center align-items-center'>
          <Input type='text' placeholder='Search' className='form-control border' value={search} onChange={handleSearch} />
          <span className='btn btn-dark' onClick={handleClick}>
            <i className="fa-solid fa-magnifying-glass"></i> 
          </span>
        </div>
      </div>

      <table className='table table-bordered table-hover table-responsive-lg mt-3 table-striped'>
        <thead>
          <tr>
            <th scope='col'> User Id </th>
            <th scope='col'> Created At </th>
            <th scope='col'> Principal </th>
            <th scope='col'> Plan Type </th>
          </tr>
        </thead>
        <tbody>
          {result.map((card,index)=>{
           return <InvestRow
              key = {index}
              card = {card}
           /> 
          })}
        </tbody>
      </table>  
    </div>
    </>
  )
}

export default Investment
