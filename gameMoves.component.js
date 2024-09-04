import React from 'react';

export const GameMoves = ({ movesData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Moves</th>
            <th>Position</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {movesData.map((each, rowIndex) => (
            <tr key={rowIndex}>
              {each.map((eachItem, cellIndex) => (
                <td key={cellIndex}>{eachItem}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
