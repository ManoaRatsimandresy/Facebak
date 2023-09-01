
import "./leftBar.css";
import news from "../../assets/news.png";
import friends from "../../assets/friends.png";
import  group from "../../assets/marketplace.png";
import watch from "../../assets/watch.png";
import developers  from "../../assets/shortcut-1.png";
import design  from "../../assets/shortcut-2.png";
import full from "../../assets/shortcut-3.png";
import website from "../../assets/shortcut-4.png";

const LeftBar = () => {
    return (
      <div className="left_sidebar">
      <div className="imp_links">
          <a href="#"><img src={news} alt="" /> Lates new</a>
          <a href="#"><img src={friends} alt="" />Friends</a>
          <a href="#"><img src={group} alt="" />Group</a>
          <a href="#"><img src={watch} alt="" />Watch</a>
          <a href="#">See More</a>
      </div>
      <div className="shortcut_links">
          <p>Your Shortcuts</p>
          <a href="#"><img src={developers} alt="" />Web developers</a>
          <a href="#"><img src={design} alt="" />Web design</a>
          <a href="#"><img src={full} alt="" />Full stack Development</a>
          <a href="#"><img src={website} alt="" />Website Experts</a>
      </div>
  </div>
    );
  };

  export default LeftBar;