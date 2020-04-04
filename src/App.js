import React, { PureComponent, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loading } from 'components/atoms/loading/Loading';
import { routes } from 'routes/routes';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import * as pages from 'pages/asyncPages';
export class App extends PureComponent {
  render() {
    return (
      <Router basename="/">
        <Suspense fallback={<Loading variant="dark" />}>
          <Switch>
            <PublicRoute exact path={routes.ROOT} component={pages.RootPage} />
            <PrivateRoute exact path={routes.DASHBOARD} component={pages.DashboardPage} />
            <Route component={pages.ErrorPage} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
