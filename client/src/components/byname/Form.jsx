import React from 'react';
import './form.css';
class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form id='form' className='nForm' onSubmit={this.props.onSubmit}>
        <input placeholder='Your Name' name='yourName' onChange={this.props.onChange} />
        <input placeholder='Their Name' name='theirName'  onChange={this.props.onChange} />

        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form;
