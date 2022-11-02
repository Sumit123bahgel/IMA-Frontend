import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import PlanCard from './plans_card';
import CreateNewPlan from './createNewPlan';
import axios from 'axios';
import Loading from '../../components/Loading';

const Plans = () => {
  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    
    const token = localStorage.getItem('token');
    axios.get('https://floating-forest-60538.herokuapp.com/v1/plans/',{ 
      headers: {Authorization : `Bearer ${token}`} 

    } ).then(res => {setResult(res.data.results); setLoading(false)})

  },[])

  if(loading ){
    return (
      <>
      <Navbar/>
      <Loading/>
      </>
    )
  }

  function createCard(card,index){
    return <PlanCard
      key = {index}
      idx = {index}
      id = {card.id}
      name = {card.planName}
      min_amount = {card.min_amount}
      max_amount = {card.max_amount}
      interest = {card.ROI}
      description = {card.description}
      createdAt = {card.createdAt}
      updatedAt = {card.updatedAt}
    />
  }

  return (
    <>
    <Navbar/>

    <div className='marginRight p-3'>

      <div className='d-flex justify-content-between align-items-center text-uppercase'>

        <h2 className='text-dark '>All Plans</h2>
        <button className='btn btn-primary btn-success' data-bs-toggle="modal" data-bs-target="#createPlan" >Create New Plan</button>
        
        <CreateNewPlan/>
      </div>

      <div className='row justify-content-center'>

        {result.map((card, index)=>{
          return createCard(card,index);
        })}

      </div>
    </div>
    </>
  )
}

export default Plans
