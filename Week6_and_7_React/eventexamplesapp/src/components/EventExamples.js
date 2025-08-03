import React, { Component } from 'react';

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // Increment counter and say hello
  incrementCounter = (e) => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
    this.sayHello();
  }

  sayHello = () => {
    console.log("Hello! This is a static message.");
  }

  // Decrement counter
  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter > 0 ? prevState.counter - 1 : 0
    }));
  }

  // Say welcome with argument
  sayWelcome = (message) => {
    alert(`${message} to our app!`);
  }

  // Synthetic event handler
  handleClick = (e) => {
    alert("I was clicked");
    console.log(e); // SyntheticEvent object
  }

  render() {
    return (
      <div>
       
        
        <div>
          <p> {this.state.counter}</p>
          <div>
          <button onClick={this.incrementCounter}>Increment</button>    
          </div>
          <button onClick={this.decrementCounter}>Decrement</button>
        </div>

        <div>
          <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>
        </div>

        <div>
          <button onClick={this.handleClick}>Click on me</button>
        </div>
      </div>
    );
  }
}

export default EventExamples;