import React from 'react';
import { Label , Input } from '../../components/formComponents';


const EditProfile = () => {

  return (
    <>
      <div class="modal fade" id="editProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">

              <h5 class="modal-title" id="exampleModalLabel">Edit Your Profile</h5>

              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <form>

                <div className='form-group'>

                  <Label for="plan_name" content = "Your Name"/>

                  <Input type="text" className='form-control' placeholder='Enter your name' required = {true}/>

                </div>

                <div className='form-group'>
                  <Label for="deposit" content="Email Id" />

                  <Input type="email" className='form-control' name='email' placeholder='Enter your valid email' required = {true} />

                </div>

                <div className='form-group'>
                  <Label for="period" content="Phone" />

                  <Input type="number" className='form-control' name='phone' placeholder='Enter your phone number' required = {true}/>

                </div>

              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile;
