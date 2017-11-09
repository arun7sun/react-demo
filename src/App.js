import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Pro from './Components/pro';
import Table from './Components/table';
import AddPro from './Components/addPro';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pro:[],
      users:[]
    }
  }

  getProj(){
    this.setState({pro:[
      {
        id:uuid.v4(),
        title:'Employee Login',
        category:'Web Design'
      },
      {
        id:uuid.v4(),
        title:'Social App',
        category: 'Andriod Dev'
      },
      {
        id:uuid.v4(),
        title:'Ecomm app',
        category: 'Web Dev'
      }
    ]});
  }
  getUsers(){
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        dataType: 'json',
        cache: false,
         success: function(data){
            this.setState({users: data}, function(){
              console.log(this.state.users);
            });
         }.bind(this),
         error: function(xhr, status, err){
           console.log("error: ", err);
         }
      });
  }

  componentWillMount(){
    this.getProj();
    
  }

  componentDidMount(){
    this.getUsers(); //Getting API data and displayed in Console alone
  }

  handleAddPro(project){
    let pro = this.state.pro;
    pro.push(project);
    this.setState({pro:pro});
  }

  handleDeletePro(id){
    let pro = this.state.pro;
    let index = pro.findIndex(x => x.id === id);
    pro.splice(index,1);
    this.setState({pro:pro});
  }
  
  uname() {
    let user = {
      name: "ArunKumar"
    }
    return user.name;
  }

  render() {
    return (
      <div className="App">
      <h3>Hello {this.uname()}</h3>
        <AddPro addpro={this.handleAddPro.bind(this)} /> <br/>
        <Pro pro={this.state.pro} onDelete={this.handleDeletePro.bind(this)}/><br/>
        <Table users={this.state.users}/>
      </div>
    );
  }
}

export default App;
