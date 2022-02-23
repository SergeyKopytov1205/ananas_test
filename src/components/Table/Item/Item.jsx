import React from "react"
import Field from "./components/Field"
import styles from './Item.module.css'

const Item = ({ name, address, inn, ogrn, date }) => {

   return (
      <div className={styles.container}>
         <Field name='Название организации' data={name} />
         <Field name='Адресс организации' data={address} />
         <Field name='ИНН' data={inn} />
         <Field name='ОГРН' data={ogrn} />
         <Field name='Дата регистрации' data={date} />
      </div>
   )
}

export default Item