import React, { useContext, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './Profil.css'
import photo from '../../assets/photo.png';
//import profil from '../../assets/profile';
import cover from '../../assets/cover.png';
import friends from '../../assets/add-friends.png';
import message from '../../assets/message.png';
import more from '../../assets/more.png';
import feeling from '../../assets/feeling.png';
import profilejob from '../../assets/profile-job.png';
import profilelocation from '../../assets/profile-location.png';
import profilestudy from '../../assets/profile-study.png';
import profilehome from '../../assets/profile-home.png';
import photo1 from '../../assets/photo1.png';
import photo2 from '../../assets/photo2.png';
import photo3 from '../../assets/photo3.png';
import photo4 from '../../assets/photo4.png';
import photo5 from '../../assets/photo5.png';
import photo6 from '../../assets/photo6.png';
import profilpic from '../../assets/profile-pic.png';
import live from '../../assets/live-video.png';
import feed from '../../assets/feed-image-1.png';
import like from '../../assets/like-blue.png';
import comments from '../../assets/comments.png';
import share from '../../assets/share.png';
import { AuthContext } from '../../context/AuthContext';
import {makeRequest as axios} from '../../axios';

const Profil = () => {
  const {user, dispatch} = useContext(AuthContext);
  const [editBio, setEditBio] = useState(false);
  const [bio, setBio] = useState("");

  axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${user.token}`;
    return config;
  })

  const handleChangeBio = () => {
    // if (editBio) {
    //   const {token, ...newUserInfo} = user;
    //   newUserInfo.bio = bio;
    //   axios.put('users', newUserInfo)
    //     .then((response) => { 
    //       dispatch({type: "", payload: response.data});
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    // }
    setEditBio(prev => !prev);
  }

  return (
    <>
      <Navbar />
      <div className="profile_contenaire">
        <img src={cover} alt="" className="cover_img" />
        <div className="profile_details">
          <div className="profile_details_left">
            <div className="pd_row">
              <img src={profilpic} alt="" className="pd_img" />
              <div>
                <h3>{user.username}</h3>
                <p>120 Friends - 5 Mutual</p>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
              </div>
            </div>
          </div>
          <div className="profile_details_right">
            <button type="button"><img src={friends} alt="" /> Friends</button>
            <button type="button"><img src={message} alt="" /> Message</button>
            <br />
            <a href="#"><img src={more} alt="" /></a>
          </div>
        </div>

        <div className="profile_info">
          <div className="info_col">
            <div className="prof_intro">
              <h3>introduction</h3>
              {!editBio && <p className="intro_texte">{bio}. <img src={feeling} alt="" /></p>}
              {editBio && <input type='text' value={bio} onChange={(e) => setBio(e.target.value)} />}
              <button style={{padding: '.25rem .5rem'}} onClick={() => handleChangeBio()}>{editBio ? "Sauvegarder" : "Modifier"}</button>

              <ul>
                <li> <img src={profilejob} alt="" /> Travail a Antsirabe</li>
                <li> <img src={profilestudy} alt="" /> Etudia A HEI</li>
                <li> <img src={profilestudy} alt="" /> Master en Informatique</li>
                <li> <img src={profilehome} alt="" /> Domicile Anosibe</li>
                <li> <img src={profilelocation} alt="" /> Vient Ambohibary</li>
              </ul>
            </div>

            <div className="profile_intro">
              <div className="titre_box">
                <h3>Photos</h3>
                <a href="#">All Photos</a>
              </div>
              <div className="photo_box">
                <div><img src={photo1} alt="" /></div>
                <div><img src={photo2} alt="" /></div>
                <div><img src={photo3} alt="" /></div>
                <div><img src={photo4} alt="" /></div>
                <div><img src={photo5} alt="" /></div>
                <div><img src={photo6} alt="" /></div>
              </div>
            </div>

            <div className="profile_intro">
              <div className="titre_box">
                <h3>Friends</h3>
                <a href="#">All Friends</a>
              </div>
              <p>120 (10 mutual)</p>
              <div className="friends_box">
                <div><img src={photo1} alt="" /><p>Thony M</p></div>
                <div><img src={photo2} alt="" /><p>Bota B</p></div>
                <div><img src={photo3} alt="" /><p>Feno E</p></div>
                <div><img src={photo4} alt="" /><p>Rasta M</p></div>
              </div>
            </div>
          </div>
          <div className="post_col">
            <div className="write_post_container">
              <div className="user_profile">
                <img src={profilpic} alt="" />
                <div>
                  <p>{user.username}</p>
                  <small>Public <i className="fas fa-caret-down"></i></small>
                </div>
              </div>

              <div className="post_input_container">
                <textarea placeholder="What's on your mind, Anthonyo" rows="3"></textarea>

                <div className="add_post_link">
                  <a href="#"><img src={live} alt="" />Live Video</a>
                  <a href="#"><img src={photo} alt="" />Photo/Video</a>
                  <a href="#"><img src={feeling} alt="" />Feeling/Activity</a>
                </div>
              </div>
            </div>
            <div className="post_container">
              <div className="post_row">
                <div className="user_profile">
                  <img src={profilpic} alt="" />
                  <div>
                    <p>{user.username}</p>
                    <span>June 24 2021, 13:40 pm</span>
                  </div>
                </div>
                <a href="#"><i className="fas fa-ellipsis-v"></i></a>
              </div>

              <p className="post_text">Lorem ipsum <span>@Gasy Surf</span> dolor sit amet consectetur adipisicing elit. Sequi reiciendis necessitatibus <a href="#">GS-TEAM</a><a href="#">STRONG</a></p>
              <img src={feed} alt="" className="post_img" />

              <div className="post_row">
                <div className="activity_icons">
                  <div><img src={like} alt="" />92</div>
                  <div><img src={comments} alt="" />5</div>
                  <div><img src={share} alt="" />1</div>
                </div>
                <div className="post_profile_icon">
                  <img src={profilpic} alt="" /> <i className="fas fa-caret-down"></i>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Profil;

