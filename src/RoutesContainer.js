import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DispatchPlans from './components/DispatchPlans';
import Stocks from './components/Stocks';

console.log('react-router', Switch);

const RoutesContainer = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Switch>
      <Route exact path="/">
        <DispatchPlans ids={[1, 2, 3]} />
      </Route>
      <Route path="/stocks">
        <Stocks />
      </Route>
    </Switch>
  );
};

export default RoutesContainer;
