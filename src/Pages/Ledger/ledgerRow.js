import React from 'react'

const LedgerRow = (props) => {
    const card = props.card;
  return (
    <tr>
      <td> {card.reference} </td>
      <td> {card.operation} </td>
      <td> {card.createdAt} </td>
      <td> {card.amount} </td>
      <td> {card.accountNumber} </td>
      <td> {card.destinationAccountNumber} </td>
      <td> {card.IFSC} </td>
      <td> {card.destinationIFSC} </td>
    </tr>
  )
}

export default LedgerRow
