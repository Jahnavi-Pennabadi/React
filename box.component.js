import React from 'react'

export const Box = ({value,id,getValue}) => {
 
    let clickHandler = value ? null : () => {getValue(id)}
    return(
        <button onClick={clickHandler} className='box-component'>
                {value} 
        </button>
    )
}