import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

import '../styles/login.scss'

import logoImg from '../assets/images/logo.png';

export function Login() {
  function handleLogin(event) {
    event.preventDefault();

    console.log('clicked login');
  }

  return (
    <div id='login-page'>
      <div className='container'>
        <img src={logoImg} alt='Logo' />
        <Button>Login with Google</Button>
        <form onSubmit={handleLogin}>
          <input />
          <input />
          <Link to='/forgot-password'>Forgot your password?</Link>
          <Button type='submit'>Login</Button>
        </form>
      </div>
    </div>
  );
}
