import React from 'react';
import { Router } from 'react-router-dom';
import { SecondaryHeader } from 'ui-infra';
import { createBrowserHistory } from 'history';
import RoutesContainer from './RoutesContainer';

const standAloneAppHistory = createBrowserHistory();

console.log(standAloneAppHistory);

// eslint-disable-next-line no-lone-blocks

const secondaryHeaderData = (history, baseRoute) => ({
  lowerHead: {
    tabs: {
      onSelection: event => {
        history.push(event.key);
      },
      options: [
        {
          key: `${baseRoute}/dps`,
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
    <SecondaryHeader data={secondaryHeaderData(history, baseRoute)} />
  );
  console.log('Template', template);
  return template;
};

export default (history = standAloneAppHistory, baseRoute = '') => {
  console.log('GET APP');
  console.log({ standAloneAppHistory });
  return (
    <Router history={history}>
      {getSecondaryHeader(history, baseRoute)}
      <div style={{ padding: '1rem 2.5rem' }}>
        <RoutesContainer baseRoute={baseRoute} />
      </div>
    </Router>
  );
};
