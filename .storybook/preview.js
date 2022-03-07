import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12
import { lightTheme } from '../styles/themes';
import { rootReducer } from '../lib/client/store/reducers';

import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export const decorators = [
  Story => (
    <div style={{ margin: '1em' }}>
      <Story />
    </div>
  ),
  Story => {
    return (
      <>
        <ThemeProvider theme={lightTheme}>
          <Story />
        </ThemeProvider>
      </>
    );
  },
  Story => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];
