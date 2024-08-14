import React from 'react';
import facebook from '../assets/facebook.svg';
import searchIcon from '../assets/search.svg';
import homeIcon from '../assets/home.svg';
import friendsIcon from '../assets/friends.png';
import videoIcon from '../assets/video.png';
import gamingIcon from '../assets/gaming.png';
import groupIcon from '../assets/groups.png';
import appsIcon from '../assets/apps.png';
import messengerIcon from '../assets/messenger.png';
import notificationIcon from '../assets/notification.svg';
import useraccountIcon from '../assets/account.png';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <img src={facebook} alt="hi" className="facebook-logo" />
        <div className="search-bar-container">
          <img src={searchIcon} alt="" className="search-icon" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="search-bar"
          />
        </div>
      </div>
      <div className="middle-section">
        <img src={homeIcon} alt="" className="home-icon" />
        <img src={friendsIcon} alt="" className="friends-icon" />
        <img src={videoIcon} alt="" className="video-icon" />
        <img src={groupIcon} alt="" className="group-icon" />
        <img src={gamingIcon} alt="" className="gaming-icon" />
      </div>
      <div className="right-section">
        <button className="apps-icon-button">
          <img src={appsIcon} alt="" className="apps-icon" />
        </button>
        <button className="messenger-icon-button">
          <img src={messengerIcon} alt="" className="messenger-icon" />
        </button>
        <button className="notification-icon-button">
          <img src={notificationIcon} alt="" className="notification-icon" />
          <div className="notification-count">2</div>
        </button>
        <img src={useraccountIcon} alt="" className="useraccount-image" />
      </div>
    </div>
  );
};

export default Header;
