import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import { Producer } from '../components/SingleProducer';

import '../styles/home.scss';

import chatbotIcon from '../assets/images/chatboticon.png';
import accountIcon from '@iconify/icons-mdi-light/account';
import clipboardText from '@iconify/icons-mdi-light/clipboard-text';
import tagIcon from '@iconify/icons-mdi-light/tag';
import clockIcon from '@iconify/icons-mdi-light/clock';
import cartIcon from '@iconify/icons-mdi-light/cart';

import producerImg_1 from '../assets/images/producer_1.jpg';
import producerImg_2 from '../assets/images/producer_2.jpg';
import producerImg_3 from '../assets/images/producer_3.jpg';
import producerImg_4 from '../assets/images/producer_4.jpg';

const mockProducers = [
  {
    id: 1,
    name: "Arnaldo's Farm",
    img: producerImg_1,
    type: 'Organic Lettuce',
  },
  {
    id: 2,
    name: 'Fruit Ninjas',
    img: producerImg_2,
    type: 'Different Fruits',
  },
  {
    id: 3,
    name: 'Earth Family',
    img: producerImg_3,
    type: 'Organic Farm',
  },
  {
    id: 4,
    name: 'Veggie Eggie',
    img: producerImg_4,
    type: 'Organic Vegetables',
  },
  {
    id: 1,
    name: "Arnaldo's Farm",
    img: producerImg_1,
    type: 'Organic Lettuce',
  },
  {
    id: 2,
    name: 'Fruit Ninjas',
    img: producerImg_2,
    type: 'Different Fruits',
  },
];

export function Home() {
  const history = useHistory();

  function handleProfile() {
    history.push('/profile'); //goes to profile
  }

  function handleGroceryList() {
    history.push('/grocery'); //goes to grocery list
  }

  function handlePromo() {
    history.push('/promo'); //goes to promo
  }

  function handleInventory() {
    history.push('/inventory'); //goes to archive
  }

  function handleShop() {
    history.push('/map'); //goes to map
  }

  function handleChatbot() {
    history.push('/chatbot'); //goes to chatbot
  }

  return (
    <div id='home-page'>
      <div className='container'>
        <div className='header'>Next to you</div>
        <div className='producers-container'>
          {mockProducers.map((producer) => (
            <Producer producer={producer} />
          ))}
        </div>

        <div className='menu-bar'>
          <div>
            <div className='profile-button'>
              <button onClick={handleProfile}>
                <Icon icon={accountIcon} />
                Account
              </button>
            </div>
            <div className='grocery-button'>
              <button onClick={handleGroceryList}>
                <Icon icon={clipboardText} />
                Grocery list
              </button>
            </div>
          </div>
          <div>
            <div className='promo-button'>
              <button onClick={handlePromo}>
                <Icon icon={tagIcon} />
                Promo
              </button>
            </div>
            <div className='archive-button'>
              <button onClick={handleInventory}>
                <Icon icon={clockIcon} />
                Archive
              </button>
            </div>
          </div>
        </div>
        <div name='static buttons'>
          <div className='shop-button'>
            <button onClick={handleShop}>
              <Icon icon={cartIcon} />
              Shop
            </button>
          </div>
          <div className='chatbot-button'>
            <button onClick={handleChatbot}>
              <img src={chatbotIcon} alt='Chatbot icon' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
