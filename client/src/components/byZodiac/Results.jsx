import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }
  };
  componentDidUpdate(prevProps) {
    if(prevProps.results !== this.props.results) {
      this.setState({results: this.props.results});
    }
  }
  render() {
    return (
      <div className='results'>
        {this.state.results && this.state.results.love && <ProgressBar max='10' animated variant="success" now={this.state.results.love} />}
        <span>love</span>

        <ProgressBar max='10' animated variant="info" now={this.state.results.intellectual} />
        <span>intellectual</span>

        <ProgressBar max='10' animated variant="warning" now={this.state.results.physical} />
        <span>physical</span>

        <ProgressBar max='10' animated variant="danger" now={this.state.results.overall} />
        <span>overall</span>

        <ProgressBar max='10' animated variant="danger" now={this.state.results.bad} />
        <span>bad</span>
        <br/>
        { this.state.results.physical === '0' || this.state.results.love === '0' || this.state.results.intellectual === '0' || parseInt(this.state.results.overall) < 2 && (<span>Avoid getting into a relationship with {this.state.theirName} </span>)
        }

        <button onClick={this.props.handleClick}>Clear</button>
      </div>
    )
  }
}

export default Results;