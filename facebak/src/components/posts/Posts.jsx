import Feed from '../sharee/Share';
import React, { useContext, useEffect } from 'react';
import './posts.css';
import '../../Style.css';
import story1 from '../../assets/upload.png';
import story2 from '../../assets/member-1.png';
import story3 from '../../assets/member-2.png';
import story4 from '../../assets/member-3.png';
import story5 from '../../assets/member-4.png';
import pic from '../../assets/profile-pic.png';
import video from '../../assets/live-video.png';
import photo from '../../assets/photo.png';
import feeling from '../../assets/feeling.png'
import like from '../../assets/like-blue.png';
import comments from '../../assets/comments.png';
import share from '../../assets/share.png';
import feed from '../../assets/feed-image-2.png';
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { makeRequest as axios } from '../../axios';
import FeedPost from '../feedPost/FeedPost';


export default function Posts() {
  // const [posts, setPosts] = useState([]);
  const {user, dispatch} = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${user.token}`;
    return config;
  })

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts");
      setPosts(res.data);
    };
    fetchPosts();
  },[]);

  return (

    <>
      <div className="story_gallery">
        <div className="story story1">
          <img className='story_img' src={story1} alt="" />
          <p>Post Story</p>
        </div>

        <div className="story story2">
          <img className='story_img' src={story2} alt="" />
          <p>Rasta</p>
        </div>

        <div className="story story3">
          <img className='story_img' src={story3} alt="" />
          <p>Sigara</p>
        </div>

        <div className="story story4">
          <img className='story_img' src={story4} alt="" />
          <p>Manoua</p>
        </div>

        <div className="story story2">
          <img className='story_img' src={story5} alt="" />
          <p>Bota</p>
        </div>
      </div>

      <div className="write_post_container">
        <Feed />
      </div>

      {posts.map((post) => (<FeedPost post={post} />))}

      {/* <div className="post_container">
        <div className="post_row">
          <div className="user_profile">
            <Link href="profile.html"><img src={pic} alt="" /></Link>
            <div>
              <p>{user.username}</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <Link href="#"><i className="fas fa-ellipsis-v"></i></Link>
        </div>


        <p className="post _text">Lorem ipsum <span>@Gasy Surf</span> dolor sit amet consectetur adipisicing elit.
          Sequi reiciendis necessitatibus <Link href="#">GS-TEAM</Link><Link href="#">STRONG</Link></p>
        <img src={feed} alt="" className="post_img" />

        <div className="post_row">
          <div className="activity_icons">
            <div><img src={like} alt="" />120 </div>
            <div><img src={comments} alt="" />40</div>
            <div><img src={share} alt="" />20</div>
          </div>
          <div className="post_profile_icon">
            <Link href="profile.html"><img src={pic} alt="" /></Link> <i className="fas fa-caret-down"></i>
          </div>
        </div>
      </div> */}
    </>
  );
}

