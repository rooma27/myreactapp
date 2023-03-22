 import React from "react";
// import React, { Component } from "react";
import PropTypes from 'prop-types';  


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {list:  [
        {
          id: '01',
          name: 'John Deo',
          email: 'john@gmail.com',
          phone: '202-555-0163'
        },
        {
          id: '02',
          name: 'Brad Pitt',
          email: 'fightclud@gmail.com',
          phone: '202-555-0106'
        },
      ]  }
    render() { 
        return (  <ul>
            {this.state.list.map((data) => (
              <li key={data.id}> 
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.phone}</p>
              </li>
            ))}
          </ul> );
    }

    
}
// MyComponent.propTypes ={
// name:React.PropTypes.string 
// }
export default MyComponent;