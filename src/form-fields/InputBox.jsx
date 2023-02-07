import React from 'react'
import './style.css'
const InputBox = ({label,onChange,...otherProps}) => {
  return (
    <div className='inputField'>
            <label>{label}</label>
            <input {...otherProps} onChange={onChange}/>
            <span>Erro Message</span>
    </div>
  )
}

export default InputBox
