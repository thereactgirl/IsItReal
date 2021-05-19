import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form id='form' onSubmit={this.props.onSubmit}>
        <input placeholder='Your Name' name='yourName' onChange={this.props.onChange} />
        <input placeholder='Their Name' name='theirName'  onChange={this.props.onChange} />

        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form;
