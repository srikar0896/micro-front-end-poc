/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import getApp from './App.jsx';

// const DEV_MODE = true;

console.log('Awesome', Link);

export const initDCMS = (history, baseRoute) => {
  console.log('DCMS INITIALIZED');
  const appToRender = getApp(history, baseRoute);
  console.log(appToRender);
  return appToRender;
};

// if (DEV_MODE) {
//   ReactDOM.render(getApp(), document.getElementById('app'));
// }
