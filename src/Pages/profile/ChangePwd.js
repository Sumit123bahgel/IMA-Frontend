import React from 'react';
import { Label,  Input } from '../../components/formComponents';


const ChangePwd = () => {
  
  return (
    <>
      
      <div className="modal fade" id="cngPwd" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              
              <h5 className="modal-title" id="staticBackdropLabel">Change Your Password</h5>

              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>

            </div>

            <div className="modal-body">
              
              <div className='my-3'>
                <Label for='oldPwd' content = 'Old Password' />

                <Input type="password" name="oldPwd" className='form-control' placeholder='Enter Your Old Password'/>

              </div>

              <div className='my-3'>
                <Label for='newPwd' content = 'New Password' />

                <Input type="password" name="newPwd" className='form-control' placeholder='Enter Your New Password'/>

              </div>

            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Update Password</button>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default ChangePwd;
