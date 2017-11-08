import React, { Component } from 'react';

class ProItem extends Component {
  render() {

    return (
      <div className="ProItem">
      <table>
        <tr><th >{this.props.project.title}</th>
        <td>{this.props.project.category}</td></tr>
      </table>
      </div>

    );
  }
}

export default ProItem;