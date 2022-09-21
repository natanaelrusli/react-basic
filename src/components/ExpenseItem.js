import React from 'react'

import ExpenseDate from './ExpenseDate'
import Card from './Card'

import './ExpenseItem.css'

function ExpenseItem(props) {
  const expenseTitle = props.title
  const expenseAmount = props.amount

  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
      <h2 className='expense-item__date'>
        { expenseTitle }
      </h2>
      <div className='expense-item__price'>
        Rp. { expenseAmount }
      </div>
    </Card>
  )
}

export default ExpenseItem