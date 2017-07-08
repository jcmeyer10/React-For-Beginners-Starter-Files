import React from 'react';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      fishes: {},
      order: {}
    }
    this.addFish = this.addFish.bind(this);
  }

  addFish(fish){
    // update our state by taking copy of current state then updating
    const fishes = {...this.state.fishes};
    // add in new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    // fishes: fishes is same as fishes in es6
    this.setState({ fishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
