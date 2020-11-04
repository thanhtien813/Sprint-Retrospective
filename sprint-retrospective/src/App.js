import React from 'react';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';
import Dashboard from '../src/components/Dashboard';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
      </Switch>
    </div>
  )
}

export default App;
