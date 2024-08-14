import React from 'react';
import './sidebar.css';
import useraccountIcon from '../assets/account.png';
import friendsIcon from '../assets/users.png';
import memories from '../assets/memories.webp';
import saved from '../assets/saved.png';
import groups from '../assets/groupssidebar.webp';
import video from '../assets/videosidebar.png';
import feeds from '../assets/feeds.png';
import events from '../assets/events.png';
import ads from '../assets/ads.png'
import fundraisers from '../assets/fundaraise.png'
import playgame from '../assets/playgame.png'
import arrow from '../assets/arrow.png'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item-container">
        <img src={useraccountIcon} alt="" className="useraccount-image sidebar-image" />
        <p>Fathimath Jazeera</p>
      </div>
      <div className="sidebar-item-container">
        <img src={friendsIcon} alt="" className="sidebar-image" />
        <p>Find Friends</p>
      </div>
      <div className="sidebar-item-container">
        <img src={memories} alt="" className="sidebar-image" />
        <p>Memories</p>
      </div>
      <div className="sidebar-item-container">
        <img src={saved} alt="" className="sidebar-image" />
        <p>Saved</p>
      </div>
      <div className="sidebar-item-container">
        <img src={groups} alt="" className="sidebar-image" />
        <p>Groups</p>
      </div>
      <div className="sidebar-item-container">
        <img src={video} alt="" className="sidebar-image" />
        <p>Video</p>
      </div>
      <div className="sidebar-item-container">
        <img src={feeds} alt="" className="sidebar-image" />
        <p>Feeds</p>
      </div>
      <div className="sidebar-item-container">
        <img src={events} alt="" className="sidebar-image" />
        <p>Events</p>
      </div>
      <div className="sidebar-item-container">
        <img src={ads} alt="" className='sidebar-image'/>
        <p>Ads Manager</p>
      </div>
      <div className="sidebar-item-container">
        <img src={fundraisers} alt="" className='sidebar-image'/>
        <p>Fundraisers</p>
      </div>
      <div className="sidebar-item-container">
        <img src={playgame} alt="" className='sidebar-image'/>
        <p>Play games</p>
      </div>
      <div className="sidebar-item-container">
        <button className='seemore-button'>
        <img src={arrow} alt="" className=' seemore-icon'/>
        </button>
        <p>See more</p>
      </div>
      <p className='sidebar-footer'>Privacy Terms Advertising Ad Choices Cookies More Meta 2024</p>
    </div>
  );
};

export default Sidebar;
