import axios from 'axios';
import React from 'react';
import EditPlan from './EditPlan.js';


const PlanCard = (props) => {
  
  async function handleDelete(id){

    if(window.confirm("Are you sure wanna delete this plan?")){
      const token = localStorage.getItem('token');
      const response = await axios.delete('https://floating-forest-60538.herokuapp.com/v1/plans/' + id,{
        headers: {Authorization : `Bearer ${token}`} 
      })

      if(response.status === 204){
        window.location.reload();
      }else{
        window.alert("couldn't delete plan! Retry");
      }
    }
  }


  const values = {
    planName : props.name,
    min_amount : props.min_amount,
    max_amount : props.max_amount,
    ROI : props.interest,
    description : props.description
  }

  return (
    <>
    <div className='col-lg-3 col-sm-5 w-auto border border-info rounded-3 px-3 py-2 m-3'>

      <h2 className='text-uppercase text-center'> {props.name} </h2>

      <p> deposit {props.min_amount}k - {props.max_amount}k </p>

      <p> Lock in period 12 months </p>

      <p> rate of interest {props.interest}% PA </p>

      <p> 3 years maturity period </p>

      
      <span className='btn btn-primary w-100'> Investors : 0 </span>
      
      <button className="btn btn-success d-block w-100 mt-3" data-bs-toggle="modal" data-bs-target={"#editPlan" + props.idx}>Edit plan</button>
      <button className="btn btn-danger d-block w-100 mt-3" onClick={()=> handleDelete(props.id)}>Delete plan</button>

      <div className='mt-2 bg-secondary text-white p-1 rounded-2'>

        Created At : {props.createdAt} <br/> Updated At : {props.updatedAt}        

      </div>

    </div>
      <EditPlan idx = {props.idx}
        id = {props.id}
       oldValues = {values}

       />
    </>
  )
}

export default PlanCard
