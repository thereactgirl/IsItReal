import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const ZForm = (props) => {
  return (
      <Form onSubmit={props.onSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' }}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Your name"
              name='name'
              onChange={props.onYourFormChange} />
          </Col>
          <Col>
            <Form.Control
              type='date'
              placeholder="Birthdate"
              name='birthdate'
              onChange={props.onYourFormChange}
            />
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
              type='date'
              placeholder="Birthdate"
              name='birthdate'
              onChange={props.onTheirFormChange} />
          </Col>
        </Row>
        <Row>
          <Form.Control
            type='year'
            placeholder="2021"
            name='year'
            onChange={props.onYearChange} />
        </Row>
        <button style={{ width: '50%', justifyContent: 'center' }} type='submit'>Submit</button>
      </Form>
  )

}

export default ZForm;
