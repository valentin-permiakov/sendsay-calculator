import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store/store';
import './styles/main.global.scss';

const root = document.getElementById('react-root');
if (root)
  createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
