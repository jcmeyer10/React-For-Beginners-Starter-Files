import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

  goToStore(event){
    event.preventDefault();


    console.log('You Changed the Url')
  }

  render(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name"
          defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
