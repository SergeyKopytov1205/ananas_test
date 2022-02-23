import React, { useState } from "react"
import ButtonAdd from "../Sharible/Buttons/ButtonAdd";
import AddItemModal from "../Sharible/Modal/AddItemModal";
import Table from "../Table/Table";
import Container from "./components/Container";

function App() {
  const [isAddItem, setIsAddItem] = useState(false)
  const [state, setState] = useState([])
  console.log(state);
  const openModal = () => {
    setIsAddItem(true)
  }

  const addNewItem = (data) => {
    setState([...state, data])
  }

  return (
    <Container>
      <ButtonAdd onClick={openModal} />
      <Table data={state} />
      {isAddItem && <AddItemModal isActive={isAddItem} close={setIsAddItem} sendData={addNewItem} />}
    </Container>
  );
}

export default App;
