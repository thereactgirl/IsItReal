import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
const ZForm = (props) => {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="Your name"
              name='name'
              onChange={props.onYourFormChange} />
          </Col>
          <Col>
            <Form.Control
            placeholder="Month"
            name='month'
            onChange={props.onYourFormChange}
            />
          </Col>
          <Col>
            <Form.Control
            placeholder="Day"
            name="day"
            onChange={props.onYourFormChange} />
          </Col>
          <Col>
            <Form.Control
            placeholder="Year"
            name='year'
            onChange={props.onYourFormChange} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Control
              placeholder="Their name"
              name='name'
              onChange={props.onTheirFormChange} />
          </Col>

           <Col>
            <Form.Control
              placeholder="Month"
              name='month'
              onChange={props.onTheirFormChange}/>
          </Col>

          <Col>
            <Form.Control
              placeholder="Day"
              name='day'
              onChange={props.onTheirFormChange} />
          </Col>

          <Col>
            <Form.Control
            placeholder="Year"
            name='year'
            onChange={props.onTheirFormChange} />
          </Col>
        </Row>
      </Form>
    )
      // <form id='form' onSubmit={this.props.onSubmit}>
      //   <input placeholder='Your Name' name='yourName' onChange={this.props.onChange} />
      //   <input placeholder='Their Name' name='theirName'  onChange={this.props.onChange} />

      //   <button type='submit'>Submit</button>
      // </form>

  }

export default ZForm;
