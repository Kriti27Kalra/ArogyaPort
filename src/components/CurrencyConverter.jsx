// src/components/CurrencyConverter.jsx
import React, { useState } from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import './CurrencyConverter.css';

const currencies = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' }
];

export default function CurrencyConverter() {
  const { currency, setCurrency, getSymbol } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrencyChange = (code) => {
    setCurrency(code);
    setIsOpen(false);
  };

  return (
    <div className="currency-converter">
      <button className="currency-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span className="currency-symbol">{getSymbol()}</span>
        <span className="currency-code">{currency}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      
      {isOpen && (
        <div className="currency-dropdown">
          {currencies.map(curr => (
            <button
              key={curr.code}
              className={`currency-option ${currency === curr.code ? 'active' : ''}`}
              onClick={() => handleCurrencyChange(curr.code)}
            >
              <span className="currency-option-symbol">{curr.symbol}</span>
              <span className="currency-option-code">{curr.code}</span>
              <span className="currency-option-name">{curr.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}