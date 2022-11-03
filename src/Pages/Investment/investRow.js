import React from 'react'

const InvestRow = (props) => {
    const card = props.card;
  return (
    <tr>
      <td> {card.user_id} </td>

      <td> {card.createdAt} </td>

      <td> {card.principle} </td>

      <td> {card.planType} </td>
    </tr>
  )
}

export default InvestRow
