import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import '../styles/grocery.scss';

import arrowLeftCircle from '../assets/images/back-btn.png';

export function Grocery() {
  const history = useHistory();
  const [newItem, setNewItem] = useState("");
  const [itens, setItens] = useState([]);

  function handleAddField(event) {
    event.preventDefault();

    if (newItem.trim() === "") {
      return;
    }

    const item = {
      name: newItem,
      bought: false,
    }

    setItens(itens.concat(item));
    console.log(itens);
    setNewItem("");

  };

  function handleInput(event) {
    setNewItem(event.target.value);
  };

  function handleBack() {
    history.push('/home');
  };

  return (
    <div id='grocery-page'>
      <div className='container'>
        <Button onClick={handleBack}>
          <img src={arrowLeftCircle}/>
        </Button> 
        <div>
          <form onSubmit={handleAddField}>
            <input placeholder='type your groceries here' onChange={handleInput} value={newItem}/>
            <button type='submit'>
              +
            </button>
          </form>
        </div>
        <div>
          {itens&&itens.map(item=><div> 
              {item.name}
             </div>)}
        </div>
      </div>
    </div>
  );

}