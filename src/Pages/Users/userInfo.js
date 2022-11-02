import React from 'react';
import userData from '../../data/userData';
import axios from 'axios';

const UserInfo = (props) => {

    const card = props.user;
    const transaction = userData[0].transaction;

    async function handleDelete(id){

      if(window.confirm("Are you sure wanna delete this user?")){
        const token = localStorage.getItem('token');
        const response = await axios.delete('https://floating-forest-60538.herokuapp.com/v1/users/' + id,{
          headers: {Authorization : `Bearer ${token}`} 
        })
  
        if(response.status === 204){
          window.location.reload();
        }else{
          window.alert("couldn't delete user! Retry");
        }
      }
    }

  return (
    <>
        <div className="modal fade" id={props.cardId}  tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

                <h5 className="modal-title" id="ModalLongTitle"> Investor Information </h5>

                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body d-flex  flex-column ">

                <h1 className='text-center'> {card.name} </h1>
                
                <div>
                    <p> Email-id : <span> {card.email} </span> </p>
                    <p> Password : <span> {userData[0].password} </span> </p>
                    <p> Address : <span> {userData[0].address} </span> </p>
                    <p> Phone : <span> {userData[0].phone} </span> </p>
                    <p> Date Of Birth : <span> {userData[0].dob} </span> </p>
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
                      <td> Invested Amount : {card.balance} </td>
                    </tr>
                  </tfoot>
                </table>

              </div>

              <div className="modal-footer d-flex justify-content-between">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger" onClick={()=> handleDelete(card.id)}>Delete User</button>
              </div>

            </div>
          </div>
        </div> 
    </>
  )
}

export default UserInfo;
