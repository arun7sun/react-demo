import React, { Component } from 'react';
import uuid from 'uuid';
import Pro from './Components/pro';
import Table from './Components/table';
import AddPro from './Components/addPro';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pro:[]
    }
  }
  componentWillMount(){
    this.setState({pro:[
      {
        id:uuid.v4,
        title:'Employee Login',
        category:'Web Design'
      },
      {
        id:uuid.v4,
        title:'Social App',
        category: 'Andriod Dev'
      },
      {
        id:uuid.v4,
        title:'Ecomm app',
        category: 'Web Dev'
      }
    ]});
  }

  handleAddPro(project){
    let pro = this.state.pro;
    pro.push(project);
    this.setState({pro:pro});

  }

  render() {
    return (
      <div className="App">
        <AddPro addpro={this.handleAddPro.bind(this)} /> <br/>
        <Pro pro={this.state.pro}/><br/>
        <Table pro={this.state.pro}/>
      </div>
    );
  }
}

export default App;
