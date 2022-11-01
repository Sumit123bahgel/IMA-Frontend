import React from 'react'
import { Label, Input } from '../../components/formComponents'

const CreateNewPlan = () => {
  return (
    <>        
      <div className="modal fade" id="createPlan"  tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">

              <h5 className="modal-title" id="exampleModalLabel">Create New Plan</h5>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form >

                <div className='mb-3'>
                  <Label for='plan_name' content ='Plan Name' />
                  
                  <Input type="text" className='form-control' placeholder='Choose a name' />
                </div>

                <div className='mb-3'>
                  <Label for="deposit" content = 'Deposit Policy'/>
                  <div className='d-flex'>

                    <Input type="number" className='form-control' placeholder='Maximum' />
                    <Input type="number" className='form-control' placeholder='Minimum' />

                  </div>         
                </div>

                <div className='mb-3'>
                  <Label for= 'period' content ='Period' />
                  
                  <Input type="number" className='form-control'  />
                </div>

                <div className='mb-3'>
                  <Label for= 'interest' content ='Interest' />
                  
                  <Input type="number" className='form-control' />
                </div>

              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateNewPlan
