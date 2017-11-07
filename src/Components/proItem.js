import React, { Component } from 'react';

class ProItem extends Component {
  render() {

    return (
      <li className="ProItem">
        <strong>{this.props.project.title}</strong> : {this.props.project.category}
      </li>
    );
  }
}

export default ProItem;