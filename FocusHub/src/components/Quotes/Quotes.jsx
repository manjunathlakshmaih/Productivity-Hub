import React, { useState, useEffect } from 'react';
import './Quotes.css'

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setQuote(data.content));
  }, []);

  return (
    <div className='Quotes'>
      <h2>Inspirational Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Quotes;