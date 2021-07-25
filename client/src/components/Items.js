import { useState } from "react";
import '../styles/items.scss';

export function Items({ item }) {

  function handleBoughtItem() {
    item.bought = !item.bought;
    console.log(item.bought);
  }

  return (
    <div className='item-container'>
      <div>
          {item.name}
          <input type='checkbox' onChange={handleBoughtItem} />
      </div>
    </div>
  );

}