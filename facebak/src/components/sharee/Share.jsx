import React from 'react';
import './Share.css';
import '../../Style.css';
import pic from '../../assets/profile-pic.png';
import video from '../../assets/live-video.png';
import photo from '../../assets/photo.png';
import feeling from '../../assets/feeling.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Feed = () => {
  const {user} = useContext(AuthContext);
 
  return(
      <div className="write_post_container">
      <div className="user_profile">
        <Link href="profile.html"><img src={pic} alt="" /></Link>
        <div>
          <p>{user.username}</p>
          <small>Public <i className="fas fa-caret-down"></i></small>
        </div>
      </div>

      <div className="post_input_container">
        <textarea 
        
        placeholder={`What's on your mind, ${user.username} `}
      
        rows="3" ></textarea>

        <div className="add_post_link">
          <Link href="#"><img src={video} alt="" />Live VIdeo</Link>
          <Link href="#"><img src={photo} alt="" />Photo/VIdeo</Link>
          <a href="#"><img src={feeling} alt=""  type="submit" style={{width: 20}}/>share</a>
        </div>

      </div>
    </div>
  );
}
export default Feed;