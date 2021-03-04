import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
    <Route path="/orphanages/create" component={CreateOrphanage} />
    <Route path="/orphanages/:id" component={Orphanage} />
  </Switch>
);

export default Routes;
