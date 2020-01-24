import React, { Component } from 'react';
import Coin from './Coin'

class Game extends Component {
  

  constructor (props) {
    super(props);
    this.state = {
      flips: 0,
      headCount: 0,
      tails: 0,
      heads: true
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler (e) {
    

    if (Math.random() >= 0.5){
      
      this.setState(st => {
        return {
        headCount: st.headCount+1, 
        flips: st.flips +1,
        heads: true
      }});
    }
    else {
      this.setState(st => {
        return {
        tails: st.tails+1, 
        flips: st.flips +1,
        heads: false
      }});
    }

  }

  render () {
    return (
      <div>
        <h1>Let's flip dat coin bro!</h1>
          <Coin heads={this.state.heads} />
          <button onClick={this.clickHandler}> FLIP!</button>
    <p>Out of {this.state.flips} flips, there have been {this.state.headCount} heads and {this.state.tails} tails.</p>
      </div>
    )
  }


}

export default Game;