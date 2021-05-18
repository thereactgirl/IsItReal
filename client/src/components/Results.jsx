import React from 'react';

const Results = ({result, percentage, handleClick }) => {
  return (
    <div>
      <p>{percentage}</p>
      <p>{result}</p>
      <button onClick={handleClick}>Clear</button>
    </div>
  )
}

export default Results;