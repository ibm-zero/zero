import { useState } from 'react';
import '../styles/product.scss';

export function Product({ item }) {
  const [quantity, setQuantity] = useState(0);

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    setQuantity(quantity - 1);
  }

  return (
    <div className='item-container'>
      <div className='item-name'>
        <img src={item.imgUrl} alt='item' /> {item.productName}
      </div>
			<div className='item-price'>${item.productPrice}<span>per {item.unit}</span></div>
      <div className='quantity'>
        <button onClick={handleDecrease}> - </button>
        <input
          value={quantity}
          onChange={(event) => {
            if (Number(event.target.value)) {
              setQuantity(event.target.value);
            }
          }}
        />
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className='add-item'>
        <button>Add</button>
      </div>
    </div>
  );
}
