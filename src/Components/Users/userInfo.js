import React from 'react'

const UserInfo = (props) => {

    const card = props.user;
    const cardId = props.cardId.substr(1);

  return (
    <>
        <div class="modal fade" id={cardId} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">

                <h5 class="modal-title" id="exampleModalLongTitle"> {card.name} </h5>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body d-flex justify-content-center flex-column align-items-center">

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
              
            </div>
          </div>
        </div> 
    </>
  )
}

export default UserInfo
