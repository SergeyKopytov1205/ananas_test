import React from "react"
import style from './ButtonSmall.module.css'

const ButtonSmall = ({ text, selector, onClick }) => {
   return (
      <button onClick={onClick} className={`${style.button} ${style[selector]}`} >
         {text}
      </button>
   )
}

export default ButtonSmall