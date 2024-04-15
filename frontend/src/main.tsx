import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>

  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
  </Provider>,
)
