import React from 'react';

const UserInfo = (props) => {

    const card = props.user;

  return (
    <>
        <div className="modal fade" id={props.cardId}  tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

                <h5 className="modal-title" id="ModalLongTitle"> User Information </h5>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body d-flex justify-content-center flex-column align-items-center">

                <img src={card.img} alt="img" className='rounded-circle my-3' style={{width : "100px"}}/>

                <h1> {card.name} </h1>
                
                <div>
                    <p> Email-id : <span> {card.email} </span> </p>
                    <p> Invested Amount : <span> {card.invest} </span> </p>
                    <p> Password : <span> {card.password} </span> </p>
                    <p> Address : <span> {card.address} </span> </p>
                    <p> Phone : <span> {card.phone} </span> </p>
                    <p> Date Of Birth : <span> {card.dob} </span> </p>
                </div>

              </div>

              <div class="modal-footer d-flex justify-content-between">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger">Delete User</button>
              </div>

            </div>
          </div>
        </div> 
    </>
  )
}

export default UserInfo;
