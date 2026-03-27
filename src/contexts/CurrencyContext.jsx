import React, { createContext, useState, useContext, useEffect } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

// Real-time exchange rates (updated)
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
  // Load saved currency from localStorage
  const [currency, setCurrency] = useState(() => {
    const savedCurrency = localStorage.getItem('preferredCurrency');
    return savedCurrency && currencySymbols[savedCurrency] ? savedCurrency : 'USD';
  });

  // Save currency preference to localStorage
  useEffect(() => {
    localStorage.setItem('preferredCurrency', currency);
  }, [currency]);

  const convertPrice = (priceInUSD) => {
    if (!priceInUSD && priceInUSD !== 0) return '0.00';
    const converted = priceInUSD * exchangeRates[currency];
    return converted.toFixed(2);
  };

  const convertPriceWithSymbol = (priceInUSD) => {
    const converted = convertPrice(priceInUSD);
    return `${getSymbol()}${converted}`;
  };

  const getSymbol = () => currencySymbols[currency];

  const getExchangeRate = () => exchangeRates[currency];

  const formatPrice = (priceInUSD) => {
    const converted = convertPrice(priceInUSD);
    const symbol = getSymbol();
    
    // Handle RTL currencies (like AED)
    if (currency === 'AED') {
      return `${converted} ${symbol}`;
    }
    return `${symbol}${converted}`;
  };

  return (
    <CurrencyContext.Provider 
      value={{ 
        currency, 
        setCurrency, 
        convertPrice, 
        convertPriceWithSymbol,
        getSymbol, 
        getExchangeRate,
        formatPrice
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};