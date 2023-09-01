import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import LeftBar from '../../components/lefBar/LeftBar';
import RightBar from '../../components/rightBar/RghtBar';
import Posts from "../../components/posts/Posts";
import './home.css';
import '../../Style.css';
const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="barsContainer">
        <div className='leftBarContainer'>
          <LeftBar />
        </div>
        <div className='PostsContainer'>
          <Posts />
        </div>
        <div className='RightBarContainer'>
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
