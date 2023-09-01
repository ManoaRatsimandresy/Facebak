
import React, { useState, useEffect } from 'react';
import Settingmenu from './SettingMenu';
import './Navbar.css';
import user from "../../assets/profile-pic.png";
function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark_theme');
    } else {
      document.body.classList.remove('dark_theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <div className={`setting_menu ${theme === 'dark' ? 'setting_menu_height' : ''}`}>
        <Settingmenu />
      </div>
      <button  className={`dark_btn ${theme === 'dark' ? 'dark_btn_on' : ''}`} onClick={toggleTheme}>
      <img  src={user} alt="profil"  />
      </button>
    </div>
  );
}

export default ThemeToggle;
