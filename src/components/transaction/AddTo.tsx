import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, Input, FormGroup } from 'reactstrap';
import { AddToStore } from './types'

interface AddToProps {
    addToStore: AddToStore
    total: number

}
const AddTo: React.FC<AddToProps> = ({ addToStore, total }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState("TRY")
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

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
    const handleChangeCurrency = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrency(e.target.value)

    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        toggle()
        e.preventDefault()
        if (name.length === 0 && description.length === 0 && date.length === 0 && amount.length === 0) {
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
            <Button className="m-2" color="primary" onClick={toggle}>+ New Transaction</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input type="text" placeholder="Name" value={name} onChange={handleChangeName} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" placeholder="Description" value={description} onChange={handleChangeDescription} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="date" placeholder="Date" value={date} onChange={handleChangeDate} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" placeholder="Amount" value={amount} onChange={handleChangeAmount} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" name="select" value={currency} onChange={handleChangeCurrency} >
                                <option>TRY</option>
                                <option>EUR</option>
                                <option>USD</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <div className="save-exit">
                        <Button className="ml-2" color="success" type="submit" onClick={handleSubmit}>Save</Button>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddTo;