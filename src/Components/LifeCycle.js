import React from 'react';


class LifeCycle extends React.Component {
    constructor(props) {
        console.log('constructor is called');

      super(props);
      this.state = {favoritecolor: "red"};
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps is called');
        return {favoritecolor: props.favcol };
      }

      componentDidMount() {
        console.log('componentDidMount is called');

        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
      }
      changeColor = () => {
        console.log('change is called');
        this.setState({favoritecolor: "blue"});
      }

    //   shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate is called');

    //     return false;
    //   }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate is called');
        document.getElementById("mydiv").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
    //    console.log("Before the update, the favorite was " + prevState.favoritecolor);
      }
      componentDidUpdate() {
        console.log('componentDidUpdate is called');
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
      componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
      }

    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        <div id="mydiv"></div>
        <div id="div2"></div>
        </div>
      );
    }
  }
  
export default LifeCycle;