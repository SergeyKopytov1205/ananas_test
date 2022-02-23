import React from "react"
import styles from './Field.module.css'

const Field = ({ name, data }) => {
   return (
      <div className={styles.container}>
         {name} : <span>{data}</span>
      </div>
   )
}

export default Field