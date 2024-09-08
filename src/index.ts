import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoot } from './components/app-root'

const container = document.getElementById('app-root');
if(container){
  const element = React.createElement(AppRoot);
  ReactDOM.createRoot(container).render(element);
}

