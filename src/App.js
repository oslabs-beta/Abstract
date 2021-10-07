import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
const Login = lazy(() => import('./Pages/Login.jsx'))
const Dashboard = lazy(() => import('./Pages/Dashboard.jsx'))

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Suspense fallback={<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Loading...</div>}>
            <Login/>
          </Suspense>
        </Route>
        <Route exact path='/dashboard/:username'>
          <Suspense fallback={<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Loading...</div>}>
            <Dashboard/>
          </Suspense>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
