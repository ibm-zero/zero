import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Map } from './pages/Map';
import { Producer } from './pages/Producer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/map' component={Map} />
        <Route path='/producer/:id' component={Producer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
