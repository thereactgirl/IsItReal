import React from 'react';

// components
import ByName from './byname/index.jsx';


// bootstrap
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <header className="App-header">
          <h1> Is it real? </h1>
        </header>
        <Tabs className='tabs' defaultActiveKey="byName">
          <Tab eventKey="byName" title="By Name" >
            <ByName />
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
