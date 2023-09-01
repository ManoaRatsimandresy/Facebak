import "./rightBar.css"
import advertisement from "../../assets/advertisement.png";
import member1 from  "../../assets/member-1.png";
import member2 from "../../assets/member-2.png";
import member3 from "../../assets/member-3.png";
import member4 from "../../assets/member-4.png";
const RightBar = () => {
    return (
     <div class="rigth_sidebar">
      <div class="sidebar_title">
          <h4>
              Event
          </h4>
          <a href="#">See all</a>
      </div>
      <div className="event">
          <div class="left_event">
              <h3>18</h3>
              <span>March</span>
          </div>
          <div className="right_event">
              <h4>Social Media</h4>
              <p><i class="fas fa-map-marker-alt"></i> Willson Tech Parck</p>
              <a href="#">More Info</a>
          </div>
      </div>
      <div className="event">
          <div class="left_event">
              <h3>22</h3>
              <span>June</span>
          </div>
          <div className="right_event">
              <h4>Mobike marketing</h4>
              <p><i className="fas fa-map-marker-alt"></i>  Willson Tech Parck</p>
              <a href="#">More Info</a>
          </div>
      </div>
      <div className="sidebar_title">
          <h4>
              Advertisement
          </h4>
          <a href="#">Close</a>
      </div>
      <img src={advertisement} alt="" class="sidebar_ads" />

      <div className="sidebar_title">
          <h4>
              Conversation
          </h4>
          <a href="#">Hide Chat</a>
      </div>
      <div className="online_list">
          <div class="online">
              <img src= {member1} alt="" />
          </div>
          <p>Alison Mina </p>
      </div>
      <div className="online_list">
          <div className="online">
              <img src= {member2} alt="" />
          </div>
          <p>Alison Mina </p>
      </div>
      <div className="online_list">
          <div className="online">
              <img src={member3} alt="" />
          </div>
          <p>Alison Mina </p>
      </div>
      <div className="online_list">
          <div className="online">
              <img src={member4} alt="" />
          </div>
          <p>Alison Mina </p>
      </div>
  </div>
    );
  };
export default RightBar;
  