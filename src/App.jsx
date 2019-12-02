import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SecondaryHeader } from 'ui-infra';
import RoutesContainer from './RoutesContainer';

console.log('router', Router);
// eslint-disable-next-line no-lone-blocks

const secondaryHeaderData = (history, baseRoute) => ({
  lowerHead: {
    tabs: {
      onSelection: event => {
        history.push(event.key);
      },
      options: [
        {
          key: `${baseRoute}/`,
          value: 'Dispatch Plans',
        },
        {
          key: `${baseRoute}/stocks`,
          value: 'Stocks',
        },
      ],
    },
  },
});

const getSecondaryHeader = (history, baseRoute) => {
  const template = (
    <SecondaryHeader data={() => secondaryHeaderData(history, baseRoute)} />
  );
  console.log('Template', template);
  return template;
};

export default (history, baseRoute) => {
  console.log('GET APP');
  return (
    <Router history={history} basename={baseRoute}>
      {getSecondaryHeader(history, baseRoute)}
      <RoutesContainer />
    </Router>
  );
};
