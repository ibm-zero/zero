import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
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
        <Route path='/map' exact component={Map} />
        <Route path='/producer/:id' exact component={Producer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
