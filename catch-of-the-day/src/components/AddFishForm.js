import React from 'react';

class AddFishForm extends React.Component{

  createFish(event){

  }

  render(){
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" placeholder="Fish Name" />
        <input type="text" placeholder="Fish Price" />
        <select>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea placeholder="Fish Desc" />
        <input type="text" placeholder="Fish Image" />

        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
