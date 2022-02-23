import React from "react";
import Item from "./Item/Item";
import styles from './Table.module.css'

const Table = ({ data }) => {
   if (data.length < 1) {
      return null
   }

   return (
      <div className={styles.container}>
         {data.map(item => {
            return (
               <Item
                  key={item.inn}
                  name={item.name}
                  address={item.address}
                  inn={item.inn}
                  ogrn={item.ogrn}
                  date={item.date}
               />
            )
         })}
      </div>
   )
}

export default Table