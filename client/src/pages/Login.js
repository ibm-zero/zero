import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

import '../styles/login.scss';

import logoImg from '../assets/images/logo.png';
import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();

    console.log('clicked login');
  }

  function handleForgotPassword() {
    alert('Check your email (:');
  }

  return (
    <div id='login-page'>
      <div className='container'>
        <img src={logoImg} alt='Logo' />
        <h1>Roots</h1>
        <Button className='google-login'>Login with Google</Button>
        <form onSubmit={handleLogin}>
          <input
            placeholder='E-mail'
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              console.log(email);
            }}
          />
          <input
            placeholder='Password'
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              console.log(password);
            }}
          />
          <Link className='link' onClick={handleForgotPassword}>
            Forgot your password?
          </Link>
          <Button type='submit'>Login</Button>
        </form>
      </div>
    </div>
  );
}
