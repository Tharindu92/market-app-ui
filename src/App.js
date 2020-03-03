import React from 'react';
// import logo from './logo.svg';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import Logout from './Logout'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Switch>
          <Route path={"/signin"} component={SignIn}/>
          <Route path={"/signup"} component={SignUp}/>
          <Route path={"/"} exact component={SignIn}/>
          <Route path={"/home"} component={Home}/>
          <Route path={"/logout"} component={Logout}/>
        </Switch>
      </Router>
  );
}

export default App;
