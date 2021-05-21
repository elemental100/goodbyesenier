import Register from './components/Register/Register';
import { Route, Switch } from 'react-router-dom';
import Random from './components/Random/Random'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'><Register /></Route>
        <Route exact path='/Random'><Random /></Route>
      </Switch>
    </div>
  )
}

export default App;
