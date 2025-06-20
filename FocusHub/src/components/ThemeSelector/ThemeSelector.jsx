import React from 'react';
import './ThemeSelector.css'

const ThemeSelector = ({ setTheme }) => {
  return (
    <div className='ThemeSelector'>
      <h2>Theme Selector</h2>
      <button onClick={() => setTheme('light')}>Light Theme</button>
      <button onClick={() => setTheme('dark')}>Dark Theme</button>
    </div>
  );
};

export default ThemeSelector;