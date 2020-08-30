import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { AddToStore, ShowForm } from './types'
import { CSSTransition } from 'react-transition-group';

interface AddToProps {
    addToStore: AddToStore
    total: number
    openEdit: ShowForm
}
const AddTo: React.FC<AddToProps> = ({ addToStore, total, openEdit }) => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState("TRY")
    const [inProp, setInProp] = useState(false);

    const time: ShowForm = () => {
        setInProp(true)
        setTimeout(function () { setInProp(false) }, 1000)
    }
    const showForm: ShowForm = () => {
        time()
        if (show === true) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)

    }
    const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)

    }
    const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)

    }
    const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value)

    }
    const handleChangeCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrency(e.target.value)

    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        time()
        e.preventDefault()
        if (name.length === 0 || description.length === 0 || date.length === 0 || amount.length === 0) {
            console.log()
            alert("Can not be empty!")
        } else {
            addToStore(total, name, description, date, amount, currency)
            setAmount("")
            setName("")
            setDescription("")
            setCurrency("")
            setDate("")
        }
    }
    return (
        <div className="AddTo">
            <CSSTransition in={inProp} timeout={1000} classNames="fade"  >
                {
                    show ? (
                        <div className="show-true">
                            <Row >
                                <div>
                                    <form>
                                        <input type="text" placeholder="Name" value={name} onChange={handleChangeName} />
                                        <input type="textarea" placeholder="Description" value={description} onChange={handleChangeDescription} />
                                        <input type="date" placeholder="Date" value={date} onChange={handleChangeDate} />
                                        <input type="number" placeholder="Amount" value={amount} onChange={handleChangeAmount} />
                                        <select name="currency" value={currency} onChange={handleChangeCurrency} >
                                            <option>TRY</option>
                                            <option>EUR</option>
                                            <option>USD</option>
                                        </select>
                                    </form>
                                </div>
                            </Row>
                            <Row>
                                <div className="save-exit">
                                    <Button className="ml-2" color="success" type="submit" onClick={handleSubmit}>Save</Button>
                                    <Button className="ml-2" color="info" onClick={showForm}>Exit</Button>
                                </div>
                            </Row>
                        </div>
                    ) : (
                            <Row className="show-false">
                                <Col>
                                    <Button className="mr-2" color="primary" onClick={showForm}>+ New Transaction</Button>
                                </Col>
                            </Row>
                        )
                }
            </CSSTransition>
        </div>
    )
}

export default AddTo;