import React from 'react'

export const Restart = ({getGame}) => {
    const restartGame = () =>{
        getGame()
    }
    return(
        <div className='restart-ele'>
            <button className='button-ele' onClick = {restartGame}>Play Again</button>
        </div>
    )
}