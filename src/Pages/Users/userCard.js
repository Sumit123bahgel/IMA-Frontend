import React from 'react';
import UserInfo from './userInfo.js';

const UserCard = (props) => {

    const card = props.user;

  return (
    <div>
    <div className='d-flex justify-content-around align-items-center h5 border row my-2 mx-1 p-2 btn btn-light rounded' data-toggle="modal" data-target={"#user" + props.cardId}>
      
      <img src={card.img} alt="img" className='rounded-circle' style={{width : '80px'}}/>

      <p> {card.name} </p>

      <p> {card.email} </p>

      <p> {card.invest} </p>
    
    </div>

    <UserInfo user = {card} cardId = {"user" + props.cardId} />

    </div>
  )
}

export default UserCard
