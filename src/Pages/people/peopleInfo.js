import React from 'react'

const PeopleInfo = (props) => {
    const card = props.info;
  return (
    <tr>
      <td> 
        {card.name}
      </td>
      <td> {card.id} </td>
      <td> {card.role} </td>
      <td> {card.email} </td>
      <td> {card.phoneNo} </td>
    </tr>
  )
}

export default PeopleInfo
