import React, { useState } from "react"
import ButtonAdd from "../Sharible/Buttons/ButtonAdd";
import AddItemModal from "../Sharible/Modal/AddItemModal";
import Table from "../Table/Table";
import Container from "./components/Container";

function App() {
  const [isAddItem, setIsAddItem] = useState(false)
  const [state, setState] = useState([])

  const openModal = () => {
    setIsAddItem(true)
  }

  const addNewItem = (data) => {
    const coincidences = state.some(item => {
      return item.inn === data.inn
    })
    if (coincidences) return
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
