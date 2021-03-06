import React from 'react';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {

  constructor(){
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    this.state = {
      fishes: {},
      order: {}
    };
  }

  // Firebase

  componentWillMount(){
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })
    // check if any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }

  // Local Storage
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem(`order-${this.props.params.storeId}`,
    JSON.stringify(nextState.order));
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

  updateFish(key, updatedFish) {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order}

    //update or add the new number of fish
    order[key] = order[key] + 1 || 1

    // update our state
    this.setState({ order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {Object
            .keys(this.state.fishes)
            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]}
            addToOrder={this.addToOrder}/>)
          }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params}
        />
        <Inventory addFish={this.addFish}
          updateFish={this.updateFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
        />
      </div>
    )
  }
}

export default App;
