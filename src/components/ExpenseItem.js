import React from 'react'

import './ExpenseItem.css'

function ExpenseItem(props) {
  const expenseDate = props.date
  const expenseTitle = props.title
  const expenseAmount = props.amount

  return (
    <div className='expense-item'>
      <div>
        { expenseDate.toISOString() }
      </div>
      <h2 className='expense-item__date'>
        { expenseTitle }
      </h2>
      <div className='expense-item__price'>
        { expenseAmount }
      </div>
    </div>
  )
}

export default ExpenseItem