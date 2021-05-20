import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Info = () => {
  return (
    <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              About Progressed Synastry
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Synastry is simply the term for astrological compatibility. As your life progresses, so too does your birth chart by way of a phenomenon known as secondary progressions.
              <br />
              <br />
              Most astrological websites that calculate compatibility (synastry) use the birth (natal) charts. <em>You realize how limited this approach is because many people have had lengthy periods when they got on well with another person, but then relationship turned sour or died out. </em>
              <br />
              <br />
              Sometimes the relationship can be too broken or disfunctional to try and repair, but for those relationships that can be worked out it helps to know if there is an astrological reason for the trough and how long it will be. <em>The Starlove program accurately shows these periods and gives users insight as to whether to consider ending the relationship, as well as help make more informed decisions if looking for a future partner.</em>
              <br />
              <br />
              Of course, there are other factors involved that these algorithms do not process, but they generally will help one make far better decisions than pure random selection. The accuracy of this service is probably around the 80-90% range. Progressions can affect relationships for years or even decades and should be taken strongly into consideration when looking to short list or prioritize suitable scientifically derived matches. The calculations are based on planetary aspects so naturally they are generalizations, but they are specific enough to be a source of much valuable information.
              <br />
              <br />
              If you look at the example for Brad and Angelina you will see how their synastry bottomed-out in 2015 when they got divorced - Starlove (software app) rating 1.7, and how it has risen since then, rating 2.8. The latest reports are that they are getting on reasonably well again (in accordance with their progressed synastry).
              <br />
              <br />
              Likewise, if you look at the example for Brad and Jennifer for the year 2000 when they got married, you will see why they were so in love at the time.

              Compatibility into the future can be done in the same manner, it just requires a small loop which successively increments the year to be calculated.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
  )
}

export default Info;