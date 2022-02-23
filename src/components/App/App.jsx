import React, { useState } from "react"
import ButtonAdd from "../Sharible/Buttons/ButtonAdd";
import AddItemModal from "../Sharible/Modal/AddItemModal";
import Table from "../Table/Table";
import Container from "./components/Container";

function App() {
  const mock = [
    {
      address: "111",
      date: "2022-02-08",
      inn: "111",
      name: "111",
      ogrn: "111",
    },
    {
      address: "222",
      date: "2022-02-08",
      inn: "222",
      name: "222",
      ogrn: "222",
    },
    {
      address: "333",
      date: "2022-02-08",
      inn: "333",
      name: "333",
      ogrn: "333",
    },
  ]
  const [isAddItem, setIsAddItem] = useState(false)
  const [state, setState] = useState(mock)
  console.log(state);
  const openModal = () => {
    setIsAddItem(true)
  }

  const addNewItem = (data) => {
    setState([...state, data])
  }

  const removeItem = (inn) => {
    const newState = state.filter(item => item.inn !== inn)
    setState(newState)
  }

  const editItemAddress = (inn, address) => {
    const newState = state.map(item => {
      if (item.inn === inn) {
        return { ...item, address }
      }
      return item
    })
    setState(newState)
  }

  return (
    <Container>
      <ButtonAdd onClick={openModal} />
      <Table data={state} removeItem={removeItem} editItemAddress={editItemAddress} />
      {isAddItem && <AddItemModal isActive={isAddItem} close={setIsAddItem} sendData={addNewItem} />}
    </Container>
  );
}

export default App;
