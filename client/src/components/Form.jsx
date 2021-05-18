import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form type='onSubmit'>
        <input placeholder='Your Name' name='yourName' onChange={this.props.onChange} />
        <input placeholder='Last Name' name='theirName'  onChange={this.props.onChange} />

        <button  onSubmit={this.props.onSubmit}>Submit</button>
      </form>
    )
  }
}

export default Form;
