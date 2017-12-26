import { createStore } from 'redux';
import React, { Component } from 'react';

class Sample extends Component {
    constructor(){
        super();
        let counter = (state =0,action) => 
        {
         switch(action.type){
            case "INCREMENT": return state +1;
            case "Decrement": return state -1;
            default : return state;}
        };
    }
 render(){
    let store = createStore(this.counter);
    return store.getState();
  }
}
export default Sample;