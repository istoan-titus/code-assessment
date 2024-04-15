/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import InvoicesPage from './Invoices/InvoicesPage';
import Login from './Login/LoginPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
  };

  return isLoggedIn ? <InvoicesPage /> : <Login onSuccess={handleLoginSuccess} />;
};

export default App;
