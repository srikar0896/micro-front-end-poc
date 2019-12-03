/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Result } from 'ui-infra';
import DispatchPlans from './components/DispatchPlans';
import Stocks from './components/Stocks';

console.log('react-router', Switch);

const RoutesContainer = props => {
  console.log(props);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Route exact path={`${props.baseRoute}/dps`} component={DispatchPlans} />
      <Route exact path={`${props.baseRoute}/stocks`} component={Stocks} />
      <Route
        exact
        path="/404"
        component={() => <Result title="Page not found" />}
      />
      <Redirect exact from="/" to={`${props.baseRoute}/dps`} />
    </>
  );
};

export default RoutesContainer;
