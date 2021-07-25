import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Map } from './pages/Map';
import { Producer } from './pages/Producer';

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.confirm('Oi, sua batata ta podre');
    }, 10000);
	}, []);
	
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
<<<<<<< HEAD
        <Route path='/map' component={Map} />
        <Route path='/home' component={Home} />
=======
        <Route path='/map' exact component={Map} />
        <Route path='/producer/:id' exact component={Producer} />
>>>>>>> 2b26e9adb2575052eb7fbe6c143c682cc76d42df
      </Switch>
    </BrowserRouter>
  );
}

export default App;
