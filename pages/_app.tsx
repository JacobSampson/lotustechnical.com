import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/themes';
import { useState } from 'react';
import { Provider } from 'react-redux';
import configureAppStore from '../lib/client/store/store';

import '../styles/globals.css';

const store = configureAppStore();

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
