import React from 'react';
import { render } from 'react-dom';


import App from './app.jsx';

//redux
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

//jotai
import { createStore } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { testAtom } from './jotai/overallQualityAtoms.js';

const customJotaiStore = createStore();
customJotaiStore.set(testAtom, 1);

render(
    <Provider store={store}>
      <DevTools />
        <App />
    </Provider>
    ,
  document.getElementById('root'),
);
