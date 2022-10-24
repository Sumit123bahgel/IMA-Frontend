import React from 'react';
import Navbar from '../navbar/navbar';
import plansData from './plans_data';
import PlanCard from './plans_card';
import { useNavigate } from 'react-router-dom';

const Plans = () => {

  function createCard(card,id){
    return <PlanCard
      key = {id}
      name = {card.name}
      deposit = {card.deposit}
      period = {card.period}
      interest = {card.interest}
      maturity = {card.maturity}
      users = {card.users}
    />
  }

  const navigate = useNavigate();

  function handleNewPlan(){
    let path = '/create-new-plan';
    navigate(path);
  }

  return (
    <>
    <Navbar/>

    <div className='plans p-3'>

      <div className='d-flex justify-content-between align-items-center text-uppercase'>

        <h2 className='text-dark '>All Plans</h2>
        <button className='btn btn-primary btn-success' onClick={handleNewPlan}>Create New Plan</button>

      </div>

      <div className='d-flex text-capitalize justify-content-left my-3 flex-lg-row flex-column row'>

        {plansData.map((card, index)=>{
          return createCard(card,index);
        })}

      </div>
      
    </div>
    </>
  )
}

export default Plans
