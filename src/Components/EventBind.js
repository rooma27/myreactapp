import React, { Component } from 'react'

class EventBind extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }
    // Constructor binding
    // this.clickHandler = this.clickHandler.bind(this)
    // this.focusHandler = this.focusHandler.bind(this)


  }

 clickHandler() {
     console.log(this)
     this.setState({message: 'Goodbye'})
  }
  blurHandler() {
    console.log("Blur handler is called")
 }

  // Using Arrow function
  clickHandler = () => {
    this.setState({message:'Goodbye'})
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
        <input  onBlur={this.blurHandler}/>

        {/* Dynamic binding */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

      </div>
    )
  }
}

export default EventBind