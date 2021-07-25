import { useState } from 'react';
import '../styles/items.scss';

export function Items({ item }) {
  const [wasBought, setWasBought] = useState(item.bought);

  function handleBoughtItem() {
    setWasBought(!wasBought)
  }

  return (
    <div className={`item ${wasBought ? 'border-on' : ''}`}>
      {item.name}
      <input type='checkbox' onChange={handleBoughtItem} />
    </div>
  );
}
