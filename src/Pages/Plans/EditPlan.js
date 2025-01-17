import React from 'react'
import { useState } from 'react';
import { Input, Label } from '../../components/formComponents';

const EditPlan = ({idx, oldValues,  submit, }) => {

    const [values, setValues] = useState(oldValues);

    function handleChange(event){
        const {name,value} = event.target;

        setValues((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    }
    
    function handleSubmit(event){
      event.preventDefault();
      submit(values);
    }
    

  return (
    <>
        <div className="modal fade" id={"editPlan" + idx} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

              <form onSubmit={handleSubmit}>

                <div className='mb-3'>
                  <Label for='plan_name' content ='Plan Name' />
                
                  <Input type="text" name = "planName" value= {values.planName} onChange={handleChange} className='form-control' placeholder='Choose a name' />
                </div>
                
                <div className='mb-3'>
                  <Label for= 'interest' content ='Interest' />
                
                  <Input type="number" name = "ROI" value= {values.ROI} onChange={handleChange} className='form-control'  />
                </div>
                
                <div className='mb-3'>
                  <Label for="deposit" content = 'Deposit Policy'/>
                  <div className='d-flex'>
                
                    <Input type="number" name = "min_amount" value= {values.min_amount} onChange={handleChange} className='form-control' placeholder='Maximum' />
                    <Input type="number" name = "max_amount" value= {values.max_amount} onChange={handleChange} className='form-control' placeholder='Minimum' />
                
                  </div>         
                </div>
                
                
                <div className='mb-3'>
                  <Label for= 'description' content ='Description' />
                
                  <Input type="text" name = "description" value= {values.description} onChange={handleChange} className='form-control' />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                
                </form>  

              </div>
            </div>
          </div>
        </div> 
    </>
  )
}

export default EditPlan
