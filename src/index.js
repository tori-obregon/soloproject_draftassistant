import React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

// import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx';

// render(
//     <App />,
//   document.getElementById('root'),
// );

const root = createRoot(document.querySelector('#root'));
root.render(<App />,);