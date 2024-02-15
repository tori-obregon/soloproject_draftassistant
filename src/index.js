import React from 'react';
import { render } from 'react-dom';
// import { createRoot } from 'react-dom/client';

import App from './app.jsx';

import { store } from './redux/store.js'
import { Provider } from 'react-redux'

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
  document.getElementById('root'),
);

// const root = createRoot(document.querySelector('#root'));
// root.render(<App />,);