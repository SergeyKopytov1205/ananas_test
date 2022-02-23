import React, { useState } from "react"
import { getDate } from "../../../utils/utils"
import ButtonSmall from "../../Sharible/Buttons/ButtonSmall"
import Input from "../../Sharible/Inputs/Input"
import Field from "./components/Field"
import style from './Item.module.css'

const Item = React.memo(({ name, address, inn, ogrn, date, removeItem, editItemAddress }) => {
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
      <div className={style.container}>
         <div className={style.content}>
            <Field name='Название организации' data={name} />
            {isEdit
               ? <div className={style.wrapper}>
                  <Field name='Адрес организации' />
                  <Input
                     value={newAddress}
                     setValue={setNewAddress}
                     type='text'
                     placeholder='Введите новый адрес'
                  />
               </div>
               : <Field name='Адрес организации' data={address} />
            }
            <Field name='ИНН' data={inn} />
            <Field name='ОГРН' data={ogrn} />
            <Field name='Дата регистрации' data={getDate(date)} />
         </div>
         <div className={style.control}>
            {isEdit
               ? <ButtonSmall text='Установить' selector='success' onClick={editItemAddressHandler} />
               : <ButtonSmall text='Изменить адрес' selector='edit' onClick={setIsEditHandler} />
            }
            <ButtonSmall text='Удалить организацию' selector='remove' onClick={removeItemHandler} />
         </div>

      </div>
   )
})

export default Item