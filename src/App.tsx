import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import { Row, Col } from 'reactstrap';
import Navi from './components/navi/Navi';
import Transaction from './components/transaction/Transaction'

function App() {
  return (
    <div className="App">
        <Navi/>
        <Row>
           <Col xs="3">
             <Dashboard/>
           </Col>
           <Col xs="9">
             <Transaction/>
           </Col>
        </Row>
    </div>
  );
}

export default App;
