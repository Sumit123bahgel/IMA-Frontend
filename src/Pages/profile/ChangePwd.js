import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Label,  Input } from '../../components/formComponents';


const ChangePwd = () => {
  
  return (
    <>
      
      <div class="modal fade" id="cngPwd" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              
              <h5 class="modal-title" id="staticBackdropLabel">Change Your Password</h5>

              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>

            </div>

            <div class="modal-body">
              
              <div className='my-3'>
                <Label for='oldPwd' content = 'Old Password' />

                <Input type="password" name="oldPwd" className='form-control' placeholder='Enter Your Old Password'/>

              </div>

              <div className='my-3'>
                <Label for='newPwd' content = 'New Password' />

                <Input type="password" name="newPwd" className='form-control' placeholder='Enter Your New Password'/>

              </div>

            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Update Password</button>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default ChangePwd;
