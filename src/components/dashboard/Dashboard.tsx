import React from 'react'
import './Dashboard.css'
import { ListGroup, ListGroupItem } from 'reactstrap';

function Dashboard() {
    return (
        <div className="dashboard">
            <ListGroup>
                <ListGroupItem ><h6>Dashboard</h6></ListGroupItem>
                <ListGroupItem active><h6>Transactions</h6></ListGroupItem>
                <ListGroupItem><h6>Accounts</h6></ListGroupItem>
                <ListGroupItem><h6>Settings</h6></ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default Dashboard
