import React from 'react';
import Form from './Form.jsx';
import Results from './Results.jsx';

const ByName = ({ onSubmit, onChange, yourName, theirName, handleClick, result, percentage}) => {
  return (
   <div>
    <Form
      onSubmit={onSubmit}
      onChange={onChange}
    />
    <div className="lovebirds">
      {yourName && <p> {yourName} </p>}
      {theirName && <p> & {theirName} </p>}
    </div>
    { result && <Results result={result} percentage={percentage} handleClick={handleClick} /> }
    </div>
  )
}

export default ByName;