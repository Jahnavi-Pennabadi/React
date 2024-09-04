import React from 'react'

export const AppHeader = ({title,scope}) =>{
    return(
        <div className='header'>
            <h1>
                {title}
            </h1>
            <p>{scope}</p>
        </div>
    )
}