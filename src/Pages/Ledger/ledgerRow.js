import React from 'react'

const LedgerRow = (props) => {
    const card = props.card;
  return (
    <tr>
      <td> {card.userId} </td>
      <td> {card.date} </td>
      <td> {card.amount} </td>
      <td> {card.accountNumber} </td>
      <td> {card.destinationAccountNumber} </td>
      <td> {card.ifsc} </td>
      <td> {card.destinationIfsc} </td>
    </tr>
  )
}

export default LedgerRow
