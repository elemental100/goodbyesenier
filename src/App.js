import Register from './components/Register';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'><Register /></Route>
      </Switch>
    </div>
  );
}

export default App;
