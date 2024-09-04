import React from 'react'

export const GameOutcome = ({xwins,owins,draw}) => {
    let Game = xwins + owins + draw
    return(
        <div className='outcome-box'>
            <table>
                <thead>
                    <tr>
                        <th scope = 'column'>Games</th>
                        <th scope = 'column'>X-Win</th>
                        <th scope = 'column'>O-win</th>
                        <th scope = 'column'>Draw</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{Game}</td>
                    <td>{xwins}</td>
                    <td>{owins}</td>
                    <td>{draw}</td>
                </tbody>
            </table>
        </div>
    )
}