import React from 'react';
import ZForm from './Form.jsx';
import Results from './Results.jsx';
import Info from './Info.jsx';
import axios from 'axios';

class ByZodiac extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      you: {
        name: '',
        birthdate: '',
      },
      them: {
        name: '',
        birthdate: ''
      },
      year: 2021,
      results: {  },
      updated: false
    }
    this.onYourFormChange = this.onYourFormChange.bind(this);

    this.onTheirFormChange = this.onTheirFormChange.bind(this);

    this.onYearChange = this.onYearChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  onYourFormChange(event) {
    let you = { ...this.state.you }
    you[event.target.name] = event.target.value
    this.setState({ you: you })
  };

  onTheirFormChange(event) {
    let them = { ...this.state.them }
    them[event.target.name] = event.target.value
    this.setState({ them: them })
  };

  onYearChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  handleClick() {
    this.setState({
      you: {
        name: '',
        birthdate: '',
      },
      them: {
        name: '',
        birthdate: ''
      },
      updated: false
    })
    document.getElementById("form").reset();
  }

  convertDate(date) {
    let [year, month, day] = date.split('-')
    let converted = `${month}/${day}/${year}`
    return converted;
  };

  onSubmit(event) {
    event.preventDefault();
    // change formate form 1994-12-10 to mm/dd/yyyy
    let data = {
      yourName: this.state.you.name,
      yourDOB: this.convertDate(this.state.you.birthdate),
      theirName: this.state.them.name,
      theirDOB: this.convertDate(this.state.them.birthdate),
      year: this.state.year

    };
    axios.post('/zodiac', data)
      .then(res => {
        this.setState({
          results: res.data[0]
        });
      })
      .catch(err => {
        console.log(err);
      })

      let hitsLeft = this.state.apiHitsLeft - 1;
      this.setState({ apiHitsLeft: hitsLeft, updated: true });
  };

  render() {

    return (
      <div>
        <ZForm
          onSubmit={this.onSubmit}
          onYourFormChange={this.onYourFormChange}
          onTheirFormChange={this.onTheirFormChange}
          onYearChange={this.onYearChange}
          you={this.state.you}
          them={this.state.them}
        />
        <div className="lovebirds">
          {this.state.you.name && <p> {this.state.you.name} </p>}
          {this.state.them.name && <p> & {this.state.them.name} </p>}
        </div>

        {this.state.results &&
        <Results
         results={this.state.results}
         handleClick={this.handleClick}
         theirName={this.state.them.name}
         updated={this.state.updated}/>}
        <Info />
      </div>

    )
  }
};

export default ByZodiac;