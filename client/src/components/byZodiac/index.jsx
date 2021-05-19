import React from 'react';
import ZForm from './Form.jsx';
import Results from './Results.jsx';

import axios from 'axios';

class ByZodiac extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      you: {
        name: '',
        month: '',
        day: '',
        year: ''
      },
      them: {
        name: '',
        month: '',
        day: '',
        year: ''
      }
    }
    this.onYourFormChange = this.onYourFormChange.bind(this);

    this.onTheirFormChange = this.onTheirFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  onYourFormChange(event) {
    let you = {...this.state.you}
    you[event.target.name] =  event.target.value
    this.setState({you: you})
  };

  onTheirFormChange(event) {
    let them = {...this.state.them}
    them[event.target.name] =  event.target.value
    this.setState({them: them})
  };

  handleClick() {
    this.setState({
      yourName: '',
      theirName: '',
      percentage: '',
      result: '',
    })
    document.getElementById("form").reset();
  }

  onSubmit(event) {
    event.preventDefault();
    let data = {
      fname: this.state.yourName,
      sname: this.state.theirName
    };

    axios.post('/percentage', data)
      .then(res => {
        this.setState({ percentage: res.data.percentage, result: res.data.result });
      })
      .catch(err => {
        console.log(err);
      })


  };

  render() {
    return (
      <div>
        <ZForm
          onSubmit={this.onSubmit}
          onYourFormChange={this.onYourFormChange}
          onTheirFormChange={this.onTheirFormChange}
          you={this.state.you}
          them={this.state.them}
        />
        <div className="lovebirds">
          {this.state.you.name && <p> {this.state.you.name} </p>}
          {this.state.them.name && <p> & {this.state.them.name} </p>}
        </div>
        {this.state.result && <Results result={this.state.result} percentage={this.state.percentage} handleClick={this.handleClick} />}
      </div>
    )
  }
};

  export default ByZodiac;