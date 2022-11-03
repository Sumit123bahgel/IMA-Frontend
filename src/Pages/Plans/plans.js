import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import PlanCard from './plans_card';
import CreateNewPlan from './createNewPlan';
import axios from 'axios';
import Loading from '../../components/Loading';


const Plans = () => {
  
  const [values , setValues] = useState({
    planName : '',
    ROI : 0,
    min_amount : 0,
    max_amount : 0,
    description : ''
  });

  function handleChange(event){
    const {name,value} = event.target;

    setValues((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(true);

  async function handleDelete(id){

    if(window.confirm("Are you sure wanna delete this plan?")){
      const token = localStorage.getItem('token');
      const response = await axios.delete('https://floating-forest-60538.herokuapp.com/v1/plans/' + id,{
        headers: {Authorization : `Bearer ${token}`} 
      })

      if(response.status === 204){
        window.alert("Hey ! You have successfully deleted a plan.");
      }else{
        window.alert("couldn't delete plan! Retry");
      }
    }
  }
  
  async function handleEdit(id, data ){

      const token = localStorage.getItem('token');

    const url = 'https://floating-forest-60538.herokuapp.com/v1/plans/';

    

    const response = await axios.patch(url + id, {
     planName : data.planName,
     ROI : data.ROI,
     min_amount : data.min_amount,
     max_amount : data.max_amount,
     description : data.description
    }, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    });

    if(response.status === 200){
      window.alert("You have successfully edited the plan!");
    }else{
      window.alert("couldn't update plan! Please retry");
    }
      
    }

  async function handleCreateNewPlan(event){
    event.preventDefault();

    const token = localStorage.getItem('token');

    const url = 'https://floating-forest-60538.herokuapp.com/v1/plans/';

    

    const response = await axios.post(url, {
     planName : values.planName,
     ROI : values.ROI,
     min_amount : values.min_amount,
     max_amount : values.max_amount,
     description : values.description
    }, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    });

    if(response.status === 201){

      window.alert("Hey you have successfully created a new plan!");

    }else{

      window.alert(response.message);
    }
    
  }


  useEffect(()=>{
    
    const token = localStorage.getItem('token');
    axios.get('https://floating-forest-60538.herokuapp.com/v1/plans/',{ 
      headers: {Authorization : `Bearer ${token}`} 

    } ).then(res => {
      if(res.status === 401){
        window.alert("Login Session has been expired. Please Login again!");
      }
      setResult(res.data.results); setLoading(false)})

  },[result])

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
      delete = {handleDelete}
      editPlan = {handleEdit}
    />
  }

  return (
    <>
    <Navbar/>

    <div className='marginRight p-3'>

      <div className='d-flex justify-content-between align-items-center text-uppercase'>

        <h2 className='text-dark '>All Plans</h2>
        <button className='btn btn-primary btn-success' data-bs-toggle="modal" data-bs-target="#createPlan" >Create New Plan</button>
        
        <CreateNewPlan submit = {handleCreateNewPlan} change  = {handleChange} values = {values}/>
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
