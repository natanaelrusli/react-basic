import React from 'react'

import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>
        March 21st 2022
      </div>
      <h2 className='expense-item__date'>
        Car Insurance
      </h2>
      <div className='expense-item__price'>
        Rp. 2.000.000
      </div>
    </div>
  )
}

export default ExpenseItem