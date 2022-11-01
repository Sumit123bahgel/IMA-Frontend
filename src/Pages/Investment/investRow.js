import React from 'react'

const InvestRow = (props) => {
    const card = props.card;
  return (
    <tr>
      <td> {card.Userid} </td>
      <td> {card.Date} </td>
      <td> {card.Principle} </td>
      <td> {card.Plan_type} </td>
    </tr>
  )
}

export default InvestRow
