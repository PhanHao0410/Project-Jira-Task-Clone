import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import path from 'admin/src/constants/clientPath';
import TestMobx from './JiraComponent/LogIn';
import SignUp from './JiraComponent/SignUp';
import Users from './JiraComponent/users';
import Accounts from './JiraComponent/accounts';
import HomeProjects from './JiraComponent/home-project';
import Projects from './JiraComponent/projects';
import CreateProject from './JiraComponent/createProject';
import history from './utils/history';

function App() {
  const s3ConfigPath = (/#!(\/.*)$/.exec(history.location.hash) || [])[1];
  if (s3ConfigPath) {
    history.replace(s3ConfigPath);
  }
  return (
    <HashRouter>
      <Switch>
        {/**
         * PUBLIC PATHS
         *  */}
        <Route exact path={path.ROOT} component={TestMobx} />
        <Route path={path.SIGNUP} component={SignUp} />
        <Route path={path.HOMEPROJECT} component={HomeProjects} />
        <Route path={path.USERS} component={Users} />
        <Route path={path.ACCOUNTS} component={Accounts} />

        {/**
        {/* <Route exact path={path.LOGIN} component={LoginPage} /> */}

        {/* <ProtectedRoute path={path.ROOT} component={DefaultSidebar} /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;
