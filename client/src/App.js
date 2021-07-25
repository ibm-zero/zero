import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Map } from './pages/Map';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/map' component={Map} />
        <Route path='/home' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
