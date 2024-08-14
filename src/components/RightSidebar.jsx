import React from 'react';
import './rightsidebar.css';
const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <p className='right-sidebar-title'>Group conversations</p>
      <div className="create-group">
        <button>+</button>
        <p className='right-sidebar-subtitle'>Create new group</p>
      </div>
    </div>
  );
};

export default RightSidebar;
