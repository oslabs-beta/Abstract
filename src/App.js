// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Dashboard from './Pages/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
