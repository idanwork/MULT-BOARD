import React, { Component } from 'react';
import Cell from "./Cell";

class Board extends Component {
  render() {
    
    this.buildTable();

    return (<table className="Board">
            {this.buildTable()}
        </table>);
  }

  buildTable(){
    let rows = [[0]];

    for(let j = 1; j <= this.props.size; j++){
        rows[0].push(j);
    }

    for(let i =1; i<= this.props.size; i++){
        let row = [i];

        for(let j = 1; j <= this.props.size; j++){
            row.push(j*i);
        }   

        rows.push(row);
    }

    return(<tbody> {rows.map(r => <tr className="row">{r.map(c => <Cell val={c}/>)}</tr>)} </tbody>);
  }
}

export default Board;
