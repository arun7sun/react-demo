import React, { Component } from 'react';
import ProItem from './proItem';

class Pro extends Component {
  render() {
    let pros;
    if(this.props.pro){
      pros = this.props.pro.map(project =>{
         return (
            <ProItem key={project.title} project={project} />
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