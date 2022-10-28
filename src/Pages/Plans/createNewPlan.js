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

              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <form >

                <div className='form-group'>
                  <Label for='plan_name' content ='Plan Name' />
                  
                  <Input type="text" className='form-control' placeholder='Choose a name' />
                </div>

                <div className='form-group'>
                  <Label for="deposit" content = 'Deposit Policy'/>

                  <Input type="text" className='form-control'  />
                </div>

                <div className='form-group'>
                  <Label for= 'period' content ='Period' />
                  
                  <Input type="text" className='form-control'  />
                </div>

                <div className='form-group'>
                  <Label for= 'interest' content ='Interest' />
                  
                  <Input type="text" className='form-control' />
                </div>

              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateNewPlan
