import React from 'react'
import { Label, Input } from '../../components/formComponents'

const CreateNewPlan = () => {
  return (
    <>        
      <div class="modal fade" id="createPlan"  tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">

              <h5 class="modal-title" id="exampleModalLabel">Create New Plan</h5>

              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

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
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateNewPlan
