import React, { useState } from "react"
import Input from "../../Sharible/Inputs/Input"
import Field from "./components/Field"
import styles from './Item.module.css'

const Item = ({ name, address, inn, ogrn, date, removeItem, editItemAddress }) => {
   const [isEdit, setIsEdit] = useState(false)
   const [newAddress, setNewAddress] = useState(address)

   const removeItemHandler = () => {
      removeItem(inn)
   }

   const setIsEditHandler = () => {
      setIsEdit(true)
   }

   const editItemAddressHandler = () => {
      editItemAddress(inn, newAddress)
      setIsEdit(false)
   }

   return (
      <div className={styles.container}>
         <Field name='Название организации' data={name} />
         {isEdit
            ? <div>
               <Input
                  value={newAddress}
                  setValue={setNewAddress}
                  type='text'
                  placeholder='Введите новый адрес'
               />
               <button onClick={editItemAddressHandler} >Установить</button>
            </div>
            : <Field name='Адресс организации' data={address} />}

         <Field name='ИНН' data={inn} />
         <Field name='ОГРН' data={ogrn} />
         <Field name='Дата регистрации' data={date} />
         <button onClick={setIsEditHandler} >Изменить адресс</button>
         <button onClick={removeItemHandler}>Удалить организацию</button>
      </div>
   )
}

export default Item