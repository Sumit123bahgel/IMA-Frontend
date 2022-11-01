import React from 'react';
import ProgressBar from './progressBar.js';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Pies from './Pies';
import Scatters from "./Scatter";

const Cards = () => {
  return (
    <div className='row justify-content-around'>
      <div className='card col-lg-3 col-sm-5 m-3'>
        <div className="card-body">

        <h5 className="card-title text-capitalize text-center">Our progress over a month</h5>
        
        <ProgressBar
            title = "basic"
            progress = "40"
            color = "bg-success"
            style = {{width : '40%'}}
            />
        <ProgressBar
            title = "medium"
            progress = "20"
            color = "bg-info"
            style = {{width : '20%'}}
            />
        <ProgressBar
            title = "pro"
            progress = "60"
            color = "bg-warning"
            style = {{width : '60%'}}
        />
        <ProgressBar
            title = "Total increase from previous month"
            progress = "80"
            color = "bg-danger"
            style = {{width : '80%'}}
        />
        </div>
        <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>

      <div className="card col-lg-3 col-sm-5 m-3">
        <div className="card-body">
            <h5 className="card-title text-capitalize text-center">Our Stats across the country</h5>

            
            {/* Pie chart implemented */}
</Pies>
        
        </div>
        <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card col-lg-3 col-sm-5 m-3">
        <div className="card-body">
            <h5 className="card-title text-capitalize text-center">Increase in our Investors over the week</h5>

            
            {/* Scatter Chart implemented */}
</Scatter>
        
        </div>
        <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>

    </div>
  )
}

export default Cards
