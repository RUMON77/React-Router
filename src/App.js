
import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {

  return (
    // router switch
    <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friend/:fid">
            <FriendDetail />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
 

  );
}

export default App;
