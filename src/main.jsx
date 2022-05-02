import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import {PostsContextProvider} from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
