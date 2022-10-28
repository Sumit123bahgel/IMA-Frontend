import React from 'react';

const UserInfo = (props) => {

    const card = props.user;
    const transaction = props.user.transaction;

  return (
    <>
        <div className="modal fade" id={props.cardId}  tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

                <h5 className="modal-title" id="ModalLongTitle"> Investor Information </h5>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body d-flex  flex-column ">

                <h1 className='text-center'> {card.name} </h1>
                
                <div>
                    <p> Email-id : <span> {card.email} </span> </p>
                    <p> Password : <span> {card.password} </span> </p>
                    <p> Address : <span> {card.address} </span> </p>
                    <p> Phone : <span> {card.phone} </span> </p>
                    <p> Date Of Birth : <span> {card.dob} </span> </p>
                </div>
                
                <h4>All transactions</h4>

                <table className='table table-bordered table-hover table-responsive-lg h-20'>
                  <thead>
                    <tr> 
                      <th scope='col'> Plan Name </th>
                      <th scope='col'> Amount </th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td> {transaction.pName} </td>
                        <td> {transaction.amount} </td>
                      </tr>
                  </tbody>
                  <tfoot> 
                    <tr>
                      <td> Invested Amount : {card.invest} </td>
                    </tr>
                  </tfoot>
                </table>

              </div>

              <div className="modal-footer d-flex justify-content-between">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger">Delete User</button>
              </div>

            </div>
          </div>
        </div> 
    </>
  )
}

export default UserInfo;
