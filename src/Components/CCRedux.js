import React from "react";
import { connect } from "react-redux";
import { INCREMENT } from "../Slices/counterReducer";

class CCRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: Math.random() * 10
    };
  }
  handleIncrement() {
    this.props.INCREMENT();
  }
  render() {
    
    return (
      <>
        <h1>App</h1>
        <h3>test: {this.state.test}</h3>
        <h2>Count: {this.props.count.count}</h2>
        <button onClick={() => this.handleIncrement()}>Increase</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  INCREMENT
};

export default connect(mapStateToProps, mapDispatchToProps)(CCRedux);
