// Navbar.js
import React from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';
import search from "../../assets/search.png";
import notification from "../../assets/notification.png";
import inbox from "../../assets/inbox.png";
import video from "../../assets/video.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav_left">
        <h1><Link className='logos' to="/home">FaceBak</Link></h1>
        <ul>
          <li><img src={notification} alt="Notification" /></li>
          <li><img src={inbox} alt="Inbox" /></li>
          <li><img src={video} alt="Video" /></li>
        </ul>
      </div>
      <div className="nav_right">
        <div className="search_box">
          <img src={search} alt="Search" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav_user_icon online">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
