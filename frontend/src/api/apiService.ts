const BASE_URL = 'http://localhost:3000';

import { getToken } from '../auth/AuthService'; 
export async function loginUser(username:string, password:string) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else {
      throw new Error('Authentication failed');
    }
  } catch (error) {
    console.error('Error occurred during authentication:', error);
    throw error;
  }
}

export async function fetchInvoices() {
  const token = getToken(); 
  console.log(token, localStorage);
  const response = await fetch(`${BASE_URL}/invoices/findAll`, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch invoices');
  }
  return response.json();
}

export async function fetchInvoice(id: number) {
  
  const token = getToken(); 
  console.log(token, localStorage);
  const response = await fetch(`${BASE_URL}/invoices/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch invoice');
  }
  return response.json();
}