import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import useErrorBoundary from 'use-error-boundary';
import { history } from 'store';

import Layout from './containers/Layout';
import DashboardPage from './containers/pages/Dashboard';
import CarsPage from 'containers/pages/Cars';
import CarPage from 'containers/pages/Car';
import MapsPage from 'containers/pages/Maps';
import ReviewsPage from 'containers/pages/Reviews';
import NotFoundPage from 'components/pages/NotFound';
import ErrorPage from 'components/pages/Error';

const App = () => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary()
  return (
    <ConnectedRouter history={history}>
      <Layout>
        {didCatch? (
          <ErrorPage error={error} />
        ) : (
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={DashboardPage} />
              <Route exact path="/cars" component={CarsPage} />
              <Route exact path="/cars/:id" component={CarPage} />
              <Route exact path="/maps" component={MapsPage} />
              <Route exact path="/reviews" component={ReviewsPage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </ErrorBoundary>
        )}
      </Layout>
    </ConnectedRouter>
  );
};


export default App;
