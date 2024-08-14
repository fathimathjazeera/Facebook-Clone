import React from 'react';
import './main.css';
import videocamIcon from '../assets/videocam.png';
import photosIcon from '../assets/photos.png';
import smileIcon from '../assets/smile.png';
import useraccountIcon from '../assets/account.png';
import data from '../components/data.js';

const Main = () => {
  return (
    <div className="main-section">
      <div className="create-story-box">
        <button className="plus-button">+</button>
        <p className="story-title">Create story</p>
        <p className="sub-title">Share a photo or write something.</p>
      </div>
      <div className="post-box">
        <div className="outer-flex">
          <img src={useraccountIcon} alt="" className="useraccount-image" />
          <input
            type="text"
            placeholder="Whats on your mind, Fathimath?"
            className="post-bar"
          />
        </div>
        <hr className="hr-tag" />
        <div className="inner-flex">
          <div className="video-sec">
            <img src={videocamIcon} alt="" /> <p>Live video</p>
          </div>
          <div className="photos-sec">
            <img src={photosIcon} alt="" /> <p>Photo/video</p>
          </div>
          <div className="smile-sec">
            <img src={smileIcon} alt="" /> <p>Feeling activity</p>
          </div>
        </div>
      </div>
      {data.map((item) => (
        <div className="post-card">
          <div className="post-card-header">
            <div className="post-card-left">
              <img src={item.profilepic} alt="" className="profile-pic" />
            </div>
            <div className="author-name-container">
              <p className="author-name">{item.authorname}</p>
              <p className="post-date">{item.postdate}</p>
            </div>
            <div className="post-card-right">
              <div className="dot">...</div>
              <div>X</div>
            </div>
          </div>
          <div className="post-content">
            <p>{item.tweet}</p>
            <p>{item.content}</p>
          </div>
          <div className="post-image-container">
            <img src={item.image} alt="" className="post-image" />
          </div>
          <div className="post-footer">
            <div className="post-footer-left">
              <div>
                <p>240</p>
              </div>
              <div className="share-section">
                <p>41 comments</p>
                <p>140 shares</p>
              </div>
            </div>
            <hr />
            <div className="post-footer-right">
              <p>Like</p>
              <p>Comment</p>
              <p>Send</p>
              <p>Share</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
