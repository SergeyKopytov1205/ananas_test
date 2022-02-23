import React from "react"
import style from './Input.module.css'

const Input = ({ type, placeholder, value, setValue }) => {

   const handleOnChange = (e) => {
      const value = e.target.value
      setValue(value)
   }

   return (
      <input
         className={style.input}
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={handleOnChange}
      />
   )
}

export default Input