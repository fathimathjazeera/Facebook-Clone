import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import RightSidebar from './components/RightSidebar';

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
      <RightSidebar />
    </div>
  );
};


export default Home;