import React, { useState } from 'react';
import { loginUser } from '../api/apiService';

const Login: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const userData = await loginUser(email, password);
      console.log(userData);
      localStorage.setItem('token', userData.token); 

      if (userData) {
        onSuccess();
      } else {

        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error occurred during authentication:', error);
    }
  };

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
