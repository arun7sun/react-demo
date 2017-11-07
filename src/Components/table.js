import React, { Component } from 'react';
import '../App.css';

class Table extends Component {
  render() {
        return (
      <table className="Table" >
          <tbody>
          <tr><th >Projects</th></tr>
          <tr><td>Category</td></tr>
          </tbody>
      </table>
    );
  }
}

export default Table;