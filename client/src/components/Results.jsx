import React from 'react';

const Results = ({result, percentage, handleClick }) => {
  return (
    <div className='results'>
      <p>{percentage}% match!</p>
      <p>{result}</p>
      <button onClick={handleClick}>Clear</button>
    </div>
  )
}

export default Results;