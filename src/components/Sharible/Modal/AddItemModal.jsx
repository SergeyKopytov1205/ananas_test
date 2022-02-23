import React, { useEffect, useState } from "react"
import useFetch from "../../../hook/useFetch"
import { getDateForInput, getUTCfromDate } from "../../../utils/utils"
import ButtonSmall from "../Buttons/ButtonSmall"
import Input from "../Inputs/Input"
import style from './AddItemModal.module.css'

const AddItemModal = React.memo(({ close, isActive, sendData }) => {
   const [name, setName] = useState('')
   const [address, setAddress] = useState('')
   const [ogrn, setOgrn] = useState('')
   const [inn, setInn] = useState('')
   const [date, setDate] = useState('')

   const [{ response, isLoading, error }, doFetch] = useFetch("/4_1/rs/findById/party")

   useEffect(() => {
      if (!response) return
      const data = response.suggestions[0]
      if (data) {
         setName(data.value)
         setAddress(data.data.address.value)
         setOgrn(data.data.ogrn)
         setDate(getDateForInput(data.data.state.registration_date))
      }
   }, [response])

   const fetchData = () => {
      doFetch({
         method: 'POST',
         data: {
            "query": inn,
            "branch_type": "MAIN"
         }
      })
   }

   const closeModal = () => {
      close(false)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      e.stopPropagation()
      const data = {
         name,
         address,
         ogrn,
         inn,
         date: getUTCfromDate(date)
      }
      const isValidate = Object.keys(data).every(item => data[item] !== '')
      if (isValidate) {
         sendData(data)
         closeModal()
      }
   }

   return (
      <div className={`${style.container} ${isActive ? `${style.active}` : ''}`} onClick={closeModal}>
         <div className={style.content} onClick={(e) => { e.stopPropagation() }} >
            <form onSubmit={handleSubmit} className={style.form}>
               {error && <div>Произошла ошибка</div>}
               <Input
                  type='text'
                  placeholder='Название организации'
                  value={name}
                  setValue={setName}
               />
               <Input
                  type='text'
                  placeholder='Адрес организации'
                  value={address}
                  setValue={setAddress}
               />
               <Input
                  type='text'
                  placeholder='ОГРН'
                  value={ogrn}
                  setValue={setOgrn}
               />
               <div className={style.fieldset}>
                  <Input
                     type='text'
                     placeholder='ИНН'
                     value={inn}
                     setValue={setInn}
                  />
                  <input
                     className={isLoading ? `${style.button_fetch} ${style.loading}` : style.button_fetch}
                     disabled={inn.length < 10}
                     onClick={fetchData}
                     type='button'
                     value={isLoading ? 'Загрузка' : 'Загрузить'}
                  />
               </div>
               <Input
                  type='date'
                  placeholder='Дата регистрации'
                  value={date}
                  setValue={setDate}
               />
               <ButtonSmall
                  text='Добавить организацию'
                  selector='success'
               />
            </form>
         </div>
      </div>
   )
})

export default AddItemModal