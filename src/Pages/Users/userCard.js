import React from 'react';
import UserInfo from './userInfo.js';

const UserCard = (props) => {

    const card = props.user;

  return (
    <>
    <tr className='' data-toggle="modal" data-target={"#user" + props.cardId}>
      
      <td scope='col'> {card.id} </td>

      <td scope='col'> {card.name} </td>

      <td scope='col'> {card.email} </td>

      <td scope='col'> {card.invest} </td>
    
    </tr>

    <UserInfo user = {card} cardId = {"user" + props.cardId} />

    </>
  )
}

export default UserCard
