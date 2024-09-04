import React, { Component } from 'react';
import { Box } from './box.component';
import { Status } from './status.component';
import { Restart } from './restart.component';
import { GameOutcome } from './gameOutcomes.components';
import { GameMoves } from './gameMoves.component';

export class GameBoard extends Component {
  state = {
    values: [null, null, null, null, null, null, null, null, null],
    next: 'O',
    moves: 0,
    positions: 0,
    status: '',
    xWins : 0,
    oWins : 0,
    draw : 0,
    restart : false,
    movesData : []
  };

  getWinner = () => {
    const winningPossibilities = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  
      [0, 4, 8], [2, 4, 6]              
    ];

    const { values } = this.state;
    let isDraw = true;

    for (let i of winningPossibilities) {
      let xCount = 0;
      let oCount = 0;
      for (let j of i) {
        if (values[j] === 'X') {
          xCount += 1;

        } else if (values[j] === 'O') {
          oCount += 1;
        } else {
          isDraw = false;
        }
      }

      if (xCount === 3) {
        var xwin = this.state.xWins + 1
        this.setState({ status: 'X wins',xWins : xwin,restart : true });
        return;
      }
      if (oCount === 3) {
        var owin = this.state.oWins + 1
        this.setState({ status: 'O wins' ,oWins : owin,restart : true});
        return;
      }
    }

    if (isDraw) {
      var draws = this.state.draw + 1
      this.setState({ status: 'Stalemate', draw : draws,restart : true});
    }
  };

  getValue = (id) => {
    if((this.state.status).length > 1){
        return
    }
    var updatedCells = [...this.state.values];
    updatedCells[id] = this.state.next;
    var next = this.state.next === 'O' ? 'X' : 'O';
    var moves = this.state.moves + 1;
    var data = this.state.movesData
    data[id] = [moves,this.state.positions,next]
    this.setState(
      {
        values: updatedCells,
        next: next,
        positions: id,
        moves: moves,
        status : next,
        movesData : data
      },
      this.getWinner ,
    );
  };

  getGame = (val) => {
      this.setState({
        status : '',
        values : [null, null, null, null, null, null, null, null, null],
        restart : val,
        movesData : [],
        xWins : 0,
        oWins : 0,
        draw : 0
      })
  }

  render() {
    const { values, next, status,restart ,xWins,oCount,draw,oWins,moves,positions,movesData} = this.state;
    console.log(movesData)
    return (
      <div className='div-container'>
        <div>
        <div className='status'>
           <Status status = {status}/>
        </div>
        <div className='game-board'>
        {values.map((each, index) =>
          <Box value={each} key={index} id={index} getValue={this.getValue} />
        )}
        {restart ? <Restart getGame = {this.getGame} value = {false}/> : null}
        </div>
        </div>

        <div className='gamebox-arrange'>
        <GameOutcome xwins = {xWins} owins = {oWins} draw = {draw} /> 
        <GameMoves movesData = {movesData}/> 
        </div>
      </div>

      
    );
  }
}
