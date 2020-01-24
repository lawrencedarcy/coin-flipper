import React, { Component }  from 'react';
import "./Coin.css";
class Coin extends Component {

  render() {

    return (
      <div >
        {this.props.heads ? <img className="Coin-img" src="https://tinyurl.com/react-coin-heads-jpg" alt="heads"/> : <img className="Coin-img" src="https://tinyurl.com/react-coin-tails-jpg" alt="tails" />}

      </div>
    )
  }
}

export default Coin;