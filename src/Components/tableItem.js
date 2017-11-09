import React, { Component } from 'react';
import '../App.css';


class TableItem extends Component {
  render() {
    
    return (
    <div className="TableItem">
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>City</th>
                </tr>
                <tr >
                    <td>{this.props.user.id}</td>
                    <td>{this.props.user.name}</td>
                    <td>{this.props.user.email}</td>
                    <td>{this.props.user.company.name}</td>
                    <td>{this.props.user.address.city}</td>
                </tr>
        
            </tbody>
        </table>
    </div>
    );
  }
}

export default TableItem;