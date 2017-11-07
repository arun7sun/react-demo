import React, { Component } from 'react';
import uuid from 'uuid';

class AddPro extends Component {
    constructor(){
        super();
        this.state={
            newPro:{}
        }
    }

    static defaultProps = {
        categories:['Web Design','Android Dev','Web Dev']
    }

    handleSubmit(e){
        this.setState({newPro:{
            id:uuid.v4,
            title: this.refs.title.value,
            category: this.refs.category.value,
        }},function(){
            this.props.addpro(this.state.newPro);
        });
        e.preventDefault();
    }

  render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
    return (
      <div>
          <h3>Add a Pro</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                  <label>Title:</label><br />
                  <input type="text" placeholder="Enter Title" ref="title"  />
              </div>
              <div>
                  <label>Category:</label><br />
                  <select ref="category">
                        {categoryOptions}
                  </select>
              </div> <br />
              <div>
                  <input type="submit" value="Submit" />
              </div>
          </form>
      </div>
    );
  }
}

export default AddPro;