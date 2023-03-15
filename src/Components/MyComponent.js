 import React from "react";
// import React, { Component } from "react";
import PropTypes from 'prop-types';  


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <h2>{this.props.name}</h2> );
    }

    
}
// MyComponent.propTypes ={
// name:React.PropTypes.string 
// }
export default MyComponent;