import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

  // constructor(){
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event){
    event.preventDefault();
    console.log('You Changed the Url');

    const storeId = this.storeInput.value;
    console.log(`going to ${storeId}`);

    this.context.router.transitionTo(`/store/${storeId}`)
  }

  // can also use onSubmit={this.goToStore.bind(this)

  render(){
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

// How you surface the router using contextTypes.  Don't get into a habit of
// making things global using context but routers tend to be an exception
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
