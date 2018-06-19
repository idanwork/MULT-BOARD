import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <td className="Cell">
        { this.props.val||""}
      </td>
    );
  }
}

export default Cell;
