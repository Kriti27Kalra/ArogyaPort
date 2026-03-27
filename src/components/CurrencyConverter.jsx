import React, { useState, useEffect, useRef } from 'react';
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
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCurrencyChange = (code) => {
    setCurrency(code);
    setIsOpen(false);
  };

  return (
    <div className="currency-converter" ref={dropdownRef}>
      <button 
        className="currency-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select currency"
      >
        <span className="currency-symbol">{getSymbol()}</span>
        <span className="currency-code">{currency}</span>
        <svg 
          className={`chevron-icon ${isOpen ? 'rotate' : ''}`}
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
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
              {currency === curr.code && (
                <span className="check-mark">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}