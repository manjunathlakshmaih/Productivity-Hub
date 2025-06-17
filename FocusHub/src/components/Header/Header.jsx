import { useState, useEffect } from 'react'
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';
import './Header.css';

const Header = () => {
    const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
    return (
        <div className='app-header'>
            <h1>FocusHub</h1>
            <button className='toggle-button' onClick={toggleTheme}><img src={theme === 'light' ? moon : sun} alt="theme icon" /></button>
        </div>
    )
}

export default Header;