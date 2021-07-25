import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import '../styles/login.scss';

import logoImg from '../assets/images/roots-logo-white';
import googleIconImg from '../assets/images/google-color.png';

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    history.push('/home'); // goes to home
  }

  function handleForgotPassword() {
    alert('Check your email (:');
  }

  return (
    <div id='login-page'>
      <div className='container'>
        <img src={logoImg} alt='Logo' id='logo-img' />
        <Button className='google-login'>
          <img src={googleIconImg} alt='Logo da Google' />
          Login with Google
        </Button>
        <form onSubmit={handleLogin}>
          <input
            type='email'
            placeholder='E-mail'
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              console.log(email);
            }}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              console.log(password);
            }}
          />
          <span className='link' onClick={handleForgotPassword}>
            Forgot your password?
          </span>
          <Button type='submit'>Login</Button>
        </form>
        <a className='partner' href='https://forms.gle/Nkx1vVCvGbUegCs87' target='_blank' > Want to be our partner? </a>
      </div>
    </div>
  );
}
