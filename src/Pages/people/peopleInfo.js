import React from 'react'

const PeopleInfo = (props) => {
    const card = props.info;
  return (
    <tr>
      <td> 
        <img src={card.img} alt="img" style={{width: '30px'}} className='rounded-circle mr-1' />
        {card.name}
      </td>
      <td> {card.id} </td>
      <td> {card.role} </td>
      <td> {card.email} </td>
      <td> {card.phone} </td>
    </tr>
  )
}

export default PeopleInfo
