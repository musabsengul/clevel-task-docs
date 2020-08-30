import React, { useState } from "react";
import AddTo from "./AddTo";
import initialStore from './initialStore'
import EditTo from './EditTo'
import TransactionList from "./TransactionList";
import {
  AddToStore,
  Selected,
  ShowForm,
} from "./types";
import "./Transaction.css";

const Transaction: React.FC = () => {
  const [store, setStore] = useState(initialStore);
  const [total, setTotal] = useState<number>(store.length+1);
  const [edit, setEdit] = useState(false);
  const [current, setCurrent] = useState<any>();
  const [inProp, setInProp] = useState(false);

  const time: ShowForm = () => {
    setInProp(true)
    setTimeout(function () { setInProp(false) }, 1000)
  }
  const editIs: Selected = (selected) => {
    setCurrent(selected);
    openEdit();
  };
  const handleDelete: Selected = (selected) => {
    time()
    const newStore = store.filter((s) => s.id !== selected.id);
    setStore(newStore);
    setTotal(total - 1);
    console.log("2");
  };
  const openEdit: ShowForm = (is = false) => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
    time()
  };
  const addToStore: AddToStore = (
    total,
    name,
    description,
    date,
    amount,
    currency
  ) => {
    const filter = store.filter((s) => s.id !== total);
    setStore([
      ...filter,
      {
        id: total,
        name: name,
        description: description,
        date: date,
        amount: amount,
        currency: currency,
      },
    ]);
    setTotal(total + 1);
  };

  return (
    <div className="transaction">
      <React.Fragment>
        <AddTo addToStore={addToStore} total={total} openEdit={openEdit} />
        {edit ? (
          <EditTo
            openEdit={openEdit}
            addToStore={addToStore}
            total={total}
            current={current}
            editIs={editIs}
          />
        ) : (
            null
          )}
        <TransactionList
          editIs={editIs}
          store={store}
          handleDelete={handleDelete}
          inProp={inProp}
        />
      </React.Fragment>
    </div>
  );
};
export default Transaction;
