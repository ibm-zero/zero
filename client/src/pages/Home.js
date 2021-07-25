import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import '../styles/home.scss';
import { Icon, InlineIcon } from '@iconify/react';

import chatbotIcon from '../assets/images/chatboticon.png'
import accountIcon from '@iconify/icons-mdi-light/account';
import clipboardText from '@iconify/icons-mdi-light/clipboard-text';
import tagIcon from '@iconify/icons-mdi-light/tag';
import clockIcon from '@iconify/icons-mdi-light/clock';
import cartIcon from '@iconify/icons-mdi-light/cart';

export function Home() {
  const history = useHistory();

  function handleProfile(event) {
    history.push('/profile'); //goes to profile
  }

  function handleGroceryList(event) {
    history.push('/grocery'); //goes to grocery list
  }

  function handlePromo(event) {
    history.push('/promo'); //goes to promo
  }

  function handleArchive(event) {
    history.push('/archive'); //goes to archive
  }

  function handleShop(event) {
    history.push('/map'); //goes to map
  }

  function handleChatbot(event) {
    history.push('/chatbot'); //goes to chatbot
  }

    return (
      <div id='home-page'>
        <div className='container'>
          <div name='happy-producer'>
          </div>
          <div className='menu-bar'>
            <div>
              <div className='profile-button'>
                <Button onClick={handleProfile}>
                  <Icon icon={accountIcon}/>
                  Account
                </Button>
              </div>
              <div className='grocery-button'>
                <Button onClick={handleGroceryList}>
                  <Icon icon={clipboardText}/>
                  Grocery list
                </Button>
              </div>
            </div>
            <div>
              <div className='promo-button'>
                <Button onClick={handlePromo}>
                  <Icon icon={tagIcon}/>
                  Promo
                </Button>
              </div>
              <div className='archive-button'>
                <Button onClick={handleArchive}>
                  <Icon icon={clockIcon}/>
                  Archive
                </Button>
              </div>
            </div>
          </div>
        <div name='static buttons'>
          <div className='shop-button'>
            <Button onClick={handleShop}>
              <Icon icon={cartIcon}/>
              Shop
            </Button>
          </div>
          <div className='chatbot-button'>
            <Button onClick={handleChatbot}>
              <img src={chatbotIcon}/>
            </Button>
          </div>
        </div>
        </div>
      </div>
    );

}