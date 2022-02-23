import React from "react"
import style from './ButtonAdd.module.css'

const ButtonAdd = ({ onClick }) => {
   return (
      <button className={style.button} onClick={onClick} >
         Добавить
      </button>
   )
}

export default ButtonAdd