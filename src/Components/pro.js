import React, { Component } from 'react';
import ProItem from './proItem';

class Pro extends Component {
  deletePro(id){
    this.props.onDelete(id);
  }
  render() {
    let pros;
    if(this.props.pro){
      pros = this.props.pro.map(project =>{
         return (
            <ProItem onDelete={this.deletePro.bind(this)} key={project.title} project={project} />
         );
      });
    }
    return (
      <div className="Pro">
          <h4> Project Listing </h4>
        {pros}
      </div>
    );
  }
}


export default Pro;