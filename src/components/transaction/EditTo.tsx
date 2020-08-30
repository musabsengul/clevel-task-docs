import React, { useState, ChangeEvent, FormEvent } from 'react'
import { AddToStore, ShowForm } from './types'
import { Button, Modal, ModalBody, ModalFooter, Form, Input, FormGroup } from 'reactstrap';
interface EditToProps {
    addToStore: AddToStore
    current: any
    total: number
    openEdit: ShowForm
    modal: boolean
    toggle: ShowForm
}
const EditTo: React.FC<EditToProps> = ({ current, addToStore, total, openEdit, modal, toggle }) => {
    const [cur] = useState(current)
    const [name, setName] = useState(cur.name)
    const [id] = useState(cur.id)
    const [description, setDescription] = useState(cur.description)
    const [date, setDate] = useState(cur.date)
    const [amount, setAmount] = useState(cur.amount)
    const [currency, setCurrency] = useState(cur.currency)

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
        e.preventDefault()
        if (name.length === 0 || description.length === 0 || date.length === 0 || amount.length === 0) {
            alert("Eksik yer kaldı")
        } else {
            addToStore(id, name, description, date, amount, currency)
            setAmount("")
            setName("")
            setDescription("")
            setCurrency("")
            setDate("")
            openEdit()
        }
    }
    return (
        <div className="show-true ml-3">
            {/* <Row>
                <form>
                    <input type="text" placeholder={cur.name} value={name} onChange={handleChangeName} />
                    <input type="textarea" placeholder={cur.description} value={description} onChange={handleChangeDescription} />
                    <input type="date" placeholder={cur.date} value={date} onChange={handleChangeDate} />
                    <input type="number" placeholder={cur.amount} value={amount} onChange={handleChangeAmount} />
                    <select name="currency" value={currency} onChange={handleChangeCurrency} >
                        <option>TRY</option>
                        <option>EUR</option>
                        <option>USD</option>
                    </select>
                </form>
            </Row>
            <Row>
                <div className="save-exit">
                    <Button className="ml-2" color="success" type="submit" onClick={handleSubmit}>Save</Button>
                    <Button className="ml-2" onClick={openEdit} >Back</Button>
                </div>
            </Row> */}
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
export default EditTo;