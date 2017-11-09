import React, { Component } from 'react';
import '../App.css';
import TableItem from './tableItem';

class Table extends Component {
  render() {
    let users;
    if(this.props.users){
      users = this.props.users.map(user =>{
         return (
            <TableItem key={user.id} user={user}/>
         );
      });
    }
        return (
      <div className="Table">
          {users}
      </div>
    );
  }
}

export default Table;