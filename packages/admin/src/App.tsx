import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import path from 'admin/src/constants/clientPath';
import LogIn from './JiraComponent/LogIn';
import SignUp from './JiraComponent/SignUp';
import Users from './JiraComponent/users';
import Accounts from './JiraComponent/accounts';
import Projects from './JiraComponent/projects';
import CreateProject from './JiraComponent/createProject';
import DetailProject from './JiraComponent/detail-project';
import EditProject from './JiraComponent/edit-project';
import WordEmbed from './components/word-embed';
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
        <Route exact path={path.ROOT} component={LogIn} />
        <Route path={path.PROJECTS} component={Projects} />
        <Route path={path.CREATEPROJECT} component={CreateProject} />
        <Route path="/projec/:codeProject/board" component={DetailProject} />
        <Route path="/projectss/:codeProject/edit" component={EditProject} />
        <Route path={path.SIGNUP} component={SignUp} />
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
