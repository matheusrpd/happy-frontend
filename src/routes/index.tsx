import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import CreateOrphanage from '../pages/CreateOrphanage';
import Orphanage from '../pages/Orphanage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/app" component={Dashboard} />
    <Route path="/orphanages/:id" component={Orphanage} />
    <Route path="/orphanages/create" component={CreateOrphanage} isPrivate />
  </Switch>
);

export default Routes;
