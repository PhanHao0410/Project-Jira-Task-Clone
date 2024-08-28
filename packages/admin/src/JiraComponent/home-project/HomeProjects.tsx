import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from '../projects';
import CreateProject from '../createProject';
import DetailProject from '../detail-project';
import path from '../../constants/clientPath';
import history from '../../utils/history';

const HomeProjects = () => {
  const s3ConfigPath = (/#!(\/.*)$/.exec(history.location.hash) || [])[1];
  if (s3ConfigPath) {
    history.replace(s3ConfigPath);
  }
  return (
    <Switch>
      <Route path={path.PROJECTS} component={Projects} />
      <Route path={path.CREATEPROJECT} component={CreateProject} />
      <Route path="/:codeProject/board" component={DetailProject} />
    </Switch>
  );
};

export default HomeProjects;
