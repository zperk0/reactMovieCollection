/**
 * Created by joewolfgram on 3/1/17.
 */
/**
 * Created by joewolfgram on 2/8/17.
 */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pages from "../components/pages";
import Navigation from "../components/common/Navigation";

class NavBar extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    browserHistory = this.context.router.history;
    return (
      <Navigation
        logoImgPath="/images/movie.jpg"
        authenticated={true}
        menuItems={Pages}
        router={this.context.router}
      />
    );
  }
}

function displayRoutes() {
  let routesArray = [];
  let routesWithParamsArray = [];
  for (let componentName in Pages) {
    if (Pages[componentName].routeParams === true) {
      routesArray.push(
        <Route
          key={componentName}
          path={Pages[componentName].href}
          exact
          component={Pages[componentName].component}
        />
      );
    }
    routesArray.push(
      <Route
        key={componentName}
        path={Pages[componentName].href}
        exact
        component={Pages[componentName].component}
      />
    );
  }
  return routesArray.concat(routesWithParamsArray);
}

const Routes = props => {
  return (
    <BrowserRouter {...props}>
      <div>
        <Switch>
          <Route exactly component={NavBar} />
        </Switch>
        <Switch>
          {displayRoutes()}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export let browserHistory;
export default Routes;
