import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {



    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Month</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='03'>March</option>
          <option value='04'>April</option>
          <option value='05'>May</option>
          <option value='06'>June</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;