import React from 'react'

const Button = (props) => {
  return (
    <div className='button'>
        <button className={props.className}>{props.children}</button>
    </div>
  )
}

export default Button