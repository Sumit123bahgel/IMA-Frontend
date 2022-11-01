import React from 'react';

const PlanCard = (props) => {
  return (
    <div className='col-lg-3 col-sm-5 w-auto text-center border border-info rounded-3 px-3 py-2 m-3'>
      <h2 className='text-uppercase '> {props.name} </h2>

      <p> {props.deposit} </p>

      <p> {props.period} </p>

      <p> {props.interest} </p>

      <p> {props.maturity} </p>

      <span className='btn btn-primary'> {props.users} </span>
      
      <button className="btn btn-success d-block w-100 mt-3">Edit plan</button>
      <button className="btn btn-danger d-block w-100 mt-3">Delete plan</button>
    </div>
  )
}

export default PlanCard
