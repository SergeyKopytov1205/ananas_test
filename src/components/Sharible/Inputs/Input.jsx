import React from "react"

const Input = ({ type, placeholder, value, setValue }) => {

   const handleOnChange = (e) => {
      const value = e.target.value
      setValue(value)
   }

   return (
      <input type={type} placeholder={placeholder} value={value} onChange={handleOnChange} />
   )
}

export default Input