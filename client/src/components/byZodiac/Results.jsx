import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Results = (props) => {
  console.log(props)
  return (

    <div className='results'>

      <ProgressBar max='10' animated variant="success" now={props.results.love} />
      <span>love</span>

      <ProgressBar max='10' animated variant="info" now={props.results.intellectual} />
      <span>intellectual</span>

      <ProgressBar max='10' animated variant="warning" now={props.results.physical} />
      <span>physical</span>

      <ProgressBar max='10' animated variant="success" now={props.results.overall} />
      <span>overall</span>

      <ProgressBar max='10' animated variant="danger" now={props.results.bad} />
      <span>bad</span>
      <br />
      { props.results.physical === '0' || props.results.love === '0' || props.results.intellectual === '0' || parseInt(props.results.overall) < 2 && (<span>Avoid getting into a relationship with {props.theirName} </span>)
      }

      <button onClick={props.handleClick}>Clear</button>
    </div>
  )

}

export default Results;