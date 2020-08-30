import React from 'react';
import './Transaction.css';
import { Somethings, Selected } from './types'
import { Button, Table, } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
interface TransactionProps {
    store: Array<Somethings>
    handleDelete: Selected
    editIs: Selected
    inProp: boolean
}

const TransactionList: React.FC<TransactionProps> = ({ store, handleDelete, editIs, inProp, }) => {
    return (
        <div className="table">
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Description</th>
                        <th>Transaction Date</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{
                    store.map(s =>
                        <CSSTransition in={inProp} timeout={1000} classNames="fade" key={s.id}>
                            <tr >
                                <th scope="row">{s.id}</th>
                                <td>{s.name}</td>
                                <td>{s.description}</td>
                                <td>{s.date}</td>
                                <td> {s.currency} {s.amount}</td>
                                <td>
                                    <Button color="dark" onClick={() => editIs(s)}><i className="fas fa-edit" ></i></Button>
                                    <Button className="ml-2" color="danger" onClick={() => handleDelete(s)}>&times;</Button>
                                </td>
                            </tr>
                        </CSSTransition>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}


export default TransactionList