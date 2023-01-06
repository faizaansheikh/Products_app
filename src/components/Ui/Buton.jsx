import React from 'react'
import style from './buton.module.css'
function Buton(props) {
  return (
     <button className={style.mybtn}>{props.children}</button>
  )
}

export default Buton