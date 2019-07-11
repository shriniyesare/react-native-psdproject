import React, {Component} from 'react';

import { Router, Scene, Stack} from 'react-native-router-flux';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

export default class Routes extends Component<{}> {
  render () {
    return (

      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="signup" component={SignUp} title="SignUp" />
          <Scene key="home" component={Home} title="Home" />
        </Stack>
      </Router>
    )
  }
}