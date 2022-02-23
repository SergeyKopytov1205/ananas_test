import React from "react"
import styles from './Field.module.css'

const Field = ({ name, data }) => {
   return (
      <div className={styles.container}>
         {name} : {data}
      </div>
   )
}

export default Field