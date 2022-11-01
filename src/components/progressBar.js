import React from 'react'

const ProgressBar = (props) => {
  return (
    <div>
      <h6 className='text-capitalize'>{props.title}</h6>   
      <div className="progress mb-3">
          <div className={"progress-bar progress-bar-striped " + props.color} style={props.style} role="progressbar" aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  )
}

export default ProgressBar
