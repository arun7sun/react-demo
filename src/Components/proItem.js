import React, { Component } from 'react';
import '../App.css';

class ProItem extends Component {
  deletePro(id){
    this.props.onDelete(id);
  }

  render() {
    
    return (
      <li className="ProItem">
        <strong>{this.props.project.title}</strong>:::{this.props.project.category}&nbsp; &nbsp;
        <button className="button" onClick={this.deletePro.bind(this,this.props.project.id)}>X</button>
      </li>

    );
  }
}

export default ProItem;