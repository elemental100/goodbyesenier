import Register from './components/Register/Register';
import { Route, Switch } from 'react-router-dom';
import Random from './components/Random/Random';
import Main from './components/ETByenior/Main';
import React, { useState } from 'react';

function App() {

  const [authorized, setAuthorized] = useState(false);

  return (
      <Switch>
        <Route exact path='/'><Register onSuccess={setAuthorized}/></Route>
        <Route path='/Main'><Main authorized={authorized}/></Route>
        <Route path='/Random'><Random /></Route>
      </Switch>
  )
}

export default App;
