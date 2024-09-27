

import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import './index.css';
import i18n from './i18n';

const root = createRoot(document.getElementById('root')); 
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>
);
