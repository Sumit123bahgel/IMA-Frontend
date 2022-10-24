import React from 'react';

const PlanCard = (props) => {
  return (
    <div className='d-flex jusify-content-center align-items-center flex-column border border-info rounded-lg p-2 m-3 '>
      <h2 className='text-uppercase '> {props.name} </h2>

      <p> {props.deposit} </p>

      <p> {props.period} </p>

      <p> {props.interest} </p>

      <p> {props.maturity} </p>

      <span className='btn btn-primary'> {props.users} </span>

    </div>
  )
}

export default PlanCard
