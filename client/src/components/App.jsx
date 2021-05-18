import React from 'react';
import axios from 'axios';
import Form from './Form.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yourName: '',
      theirName: '',
    }
    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  };

  onSubmit(event) {
    event.preventDefault();
    let data = {
      fname: this.state.yourName,
      sname: this.state.theirName
    }

    const options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      params: data,
      headers: {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST,
      },
    };

    axios.post('/percentage', data)
      .then(res => {
        console.log('res', res)
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (

      <div>
        <header className="App-header">
          <h1> Is it real? </h1>
        </header>
        <Form
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />


      </div>
    )
  }
}

export default App;
