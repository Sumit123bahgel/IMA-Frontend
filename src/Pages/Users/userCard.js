import React from 'react';
import UserInfo from './userInfo.js';

const UserCard = (props) => {

    const card = props.user;

  return (
    <>
    <tr data-bs-toggle="modal" data-bs-target={"#user" + props.cardId}>
      
      <td> {props.cardId + 1} </td>

      <td> {card.name} </td>

      <td> {card.email} </td>

      <td> {card.balance} </td>
    
    </tr>

    <UserInfo user = {card} cardId = {"user" + props.cardId} />

    </>
  )
}

export default UserCard
