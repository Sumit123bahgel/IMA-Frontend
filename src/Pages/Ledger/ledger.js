import React,{useEffect, useState} from 'react'
import Navbar from '../navbar/navbar';
import LedgerRow from './ledgerRow';
import { Input } from '../../components/formComponents';
import axios from 'axios';
import Loading from '../../components/Loading';


const Ledger = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  
  const [result, setResult] = useState(null);
  
  function handleSearch(event){
    const value = event.target.value;
    if(value.length === 0){
      window.location.reload();
    }
    setSearch(value);
  }

  function handleClickSearch(){
    if(search.length === 0){
      window.location.reload();
      return;
    }

    const token = localStorage.getItem('token');
    setLoading(true);

    axios.get('https://floating-forest-60538.herokuapp.com/v1/transactions?accountNumber=' + search,{
      headers: {Authorization : `Bearer ${token}`} 
    }).then(response => {
      
      setResult(response.data.results);
      setLoading(false);

    } );
  }

  

  useEffect(()=>{
    const token = localStorage.getItem('token');
    
    axios.get('https://floating-forest-60538.herokuapp.com/v1/transactions',{ 
      headers: {Authorization : `Bearer ${token}`} 
    }).then(response => {
      if(response.status === 401){
        window.alert("Login Session has been expired. Please Login again!");
      }
      setResult(response.data.results); setLoading(false)} );

  },[result]);



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
          <h1 className='text-uppercase'>Transaction</h1>
          <div className='form-group d-flex justify-content-center align-items-center'>
            <Input type='text' placeholder='Search' className='form-control border' value = {search} onChange = {handleSearch} />
            <span className='btn btn-dark' onClick={handleClickSearch}>
              <i className="fa-solid fa-magnifying-glass"></i> 
            </span>
          </div>
        </div>
        <table className='table table-responsive-lg table-hover table-bordered table-striped'>
          <thead>
            <tr>
              <th scope="col">Reference Id</th>
              <th scope="col">Operation</th>
              <th scope="col">Created At</th>
              <th scope="col">Amount</th>
              <th scope="col">Account Number</th>
              <th scope="col">Destination A/C No</th>
              <th scope="col">IFSC</th>
              <th scope="col">Destination IFSC</th>
            </tr>
          </thead>
          <tbody>
            
            {result.map((card,index)=>{
              return <LedgerRow
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

export default Ledger
