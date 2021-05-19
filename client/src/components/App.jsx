import React from 'react';
import axios from 'axios';
// components
import ByName from './byname/index.jsx';
import Form from './byname/Form.jsx';
import Results from './byname/Results.jsx';



// bootstrap
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yourName: '',
      theirName: '',
      percentage: '',
      result: '',
    }
    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
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
      <div className='container'>
        <header className="App-header">
          <h1> Is it real? </h1>
        </header>
        <Tabs className='tabs' defaultActiveKey="byName">
          <Tab eventKey="byName" title="By Name" >
            <ByName
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              result={this.state.result}
              percentage={this.state.percentage}
            />
          </Tab>
          <Tab eventKey="byZodiac" title="byZodiac">
            <div>
              zodiac
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default App;
