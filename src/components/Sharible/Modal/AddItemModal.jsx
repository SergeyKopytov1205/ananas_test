import React, { useState } from "react"
import ButtonSmall from "../Buttons/ButtonSmall"
import Input from "../Inputs/Input"
import style from './AddItemModal.module.css'

const AddItemModal = ({ close, isActive, sendData }) => {
   const [name, setName] = useState('')
   const [address, setAddress] = useState('')
   const [ogrn, setOgrn] = useState('')
   const [inn, setInn] = useState('')
   const [date, setDate] = useState('')

   const closeModal = () => {
      close(false)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      const data = {
         name,
         address,
         ogrn,
         inn,
         date
      }
      sendData(data)
      closeModal()
   }

   return (
      <div className={`${style.container} ${isActive ? `${style.active}` : ''}`} onClick={closeModal}>
         <div className={style.content} onClick={(e) => { e.stopPropagation() }} >
            <form onSubmit={handleSubmit} className={style.form}>
               <Input type='text' placeholder='Название организации' value={name} setValue={setName} />
               <Input type='text' placeholder='Адрес организации' value={address} setValue={setAddress} />
               <Input type='text' placeholder='ОГРН' value={ogrn} setValue={setOgrn} />
               <Input type='text' placeholder='ИНН' value={inn} setValue={setInn} />
               <Input type='date' placeholder='Дата регистрации' value={date} setValue={setDate} />
               <ButtonSmall text='Добавить организацию' selector='success' />
            </form>
         </div>
      </div>
   )
}

export default AddItemModal