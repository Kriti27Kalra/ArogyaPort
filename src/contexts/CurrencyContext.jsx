// src/contexts/CurrencyContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
  SAR: 3.75,
  INR: 83.5
};

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  AED: 'د.إ',
  SAR: '﷼',
  INR: '₹'
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');

  const convertPrice = (priceInUSD) => {
    return (priceInUSD * exchangeRates[currency]).toFixed(2);
  };

  const getSymbol = () => currencySymbols[currency];

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice, getSymbol }}>
      {children}
    </CurrencyContext.Provider>
  );
};