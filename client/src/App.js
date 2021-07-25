import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Map } from './pages/Map';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/map' component={Map} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
