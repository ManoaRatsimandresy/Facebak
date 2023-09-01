import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import Profile from '../../assets/profile-pic.png';
import feedback from '../../assets/feedback.png';
import setting from '../../assets/setting.png';
import { Link, useNavigate } from 'react-router-dom';
import help from '../../assets/help.png';
import display from '../../assets/display.png';
import logoutImg from '../../assets/logout.png';
import { AuthContext } from '../../context/AuthContext';

function SettingMenu() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const {user, dispatch} = useContext(AuthContext);

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

  const toggleMenu = () => {
    setMenuOpen(prevMenuState => !prevMenuState);
  };

  const navigate = useNavigate();

  const logout = () => {
    dispatch({type: "LOGOUT"});
    navigate("/");
  }

  return (
    <>
      <div id="dark_btn" className={theme === 'dark' ? 'dark_btn_on' : ''} onClick={toggleTheme}>
        <span></span>
      </div>
      <div className={`setting_menu_inner ${isMenuOpen ? 'setting_menu_height' : ''}`}>
        <div className="user_profile">
          <img src={Profile} alt="" />
          <div>
            <p>{user.username}</p>
            <Link to="/profil">See Your Profile</Link>
          </div>
        </div>
        <hr />
        <div className="user_profile">
          <img src={feedback} alt="" />
          <div>
            <p>Feedback</p>
            <a href="#">Text</a>
          </div>
        </div>
        <hr />
        <div className="setting_links">
          <img src={setting} alt="" className="setting_icon" />
          <Link href="#">Settings & Privacy</Link>
        </div>
        <div className="setting_links">
          <img src={help} alt="" className="setting_icon" />
          <a href="#">Help & Support</a>
        </div>
        <div className="setting_links">
          <img src={display} alt="" className="setting_icon" />
          <a href="#">Display & Accessibility</a>
        </div>
        <div className="setting_links">
          <div onClick={() => logout()}>
            <img src={logoutImg} alt="" className="setting_icon" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingMenu;
