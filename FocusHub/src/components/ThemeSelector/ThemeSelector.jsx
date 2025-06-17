import React from 'react';

const ThemeSelector = ({ setTheme }) => {
  return (
    <div>
      <h2>Theme Selector</h2>
      <button onClick={() => setTheme('light')}>Light Theme</button>
      <button onClick={() => setTheme('dark')}>Dark Theme</button>
    </div>
  );
};

export default ThemeSelector;