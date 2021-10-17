import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MenuProvider } from './context/MenuProvider';
import { menuInitialState, menuReducer } from './reducers/menuReducer';
import { ClimaProvider } from './context/ClimaProvider';
import { climaInitialState, climaReducer } from './reducers/climaReducer';

ReactDOM.render(
  <React.StrictMode>
    <ClimaProvider reducer={climaReducer} initialState={climaInitialState}>
      <MenuProvider reducer={menuReducer} initialState={menuInitialState}>
        <App />
      </MenuProvider>
    </ClimaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
