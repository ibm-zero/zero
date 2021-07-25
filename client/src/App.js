import { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Map } from './pages/Map';
import { Producer } from './pages/Producer';
import { Grocery } from './pages/Grocery';
import { Profile } from './pages/Profile';
import { Inventory } from './pages/Inventory';
import { Promo } from './pages/Promo';
import { Chatbot } from './pages/Chatbot';
 
function App() {
  useEffect(() => {
    setTimeout(() => {
      window.confirm('Your cucumber expires in 2 days!');
    }, 10000);
	}, []);
	
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' > 
          <Redirect to='/login'/>
        </Route>
        <Route path='/login' exact component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/map' exact component={Map} />
        <Route path='/grocery' component={Grocery} />
        <Route path='/inventory' component={Inventory}/>
        <Route path='/producer/:id' exact component={Producer} />
        <Route path='/promo' component={Promo} />
        <Route path='/chatbot' component={Chatbot} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
