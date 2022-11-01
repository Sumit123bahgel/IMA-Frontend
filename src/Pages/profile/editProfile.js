import React from 'react';
import { Label , Input } from '../../components/formComponents';


const EditProfile = () => {

  return (
    <>
      <div className="modal fade" id="editProfile" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">

              <h5 className="modal-title" id="exampleModalLabel">Edit Your Profile</h5>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form>

                <div className='mb-3'>

                  <Label for="plan_name" content = "Your Name"/>

                  <Input type="text" className='form-control' placeholder='Enter your name' required = {true}/>

                </div>

                <div className='mb-3'>
                  <Label for="deposit" content="Email Id" />

                  <Input type="email" className='form-control' name='email' placeholder='Enter your valid email' required = {true} />

                </div>

                <div className='mb-3'>
                  <Label for="period" content="Phone" />

                  <Input type="number" className='form-control' name='phone' placeholder='Enter your phone number' required = {true}/>

                </div>

              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProfile;
