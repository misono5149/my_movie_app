import React from "react";
import PropTypes from 'prop-types';

class App extends React.Component{ 
  state = {
    isLoading : true
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading : false});
    },4000);
  }
  // react automatically execute render method
  render(){
    console.log("i am rendering");
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
    </div>
    );
  }
}

export default App;
