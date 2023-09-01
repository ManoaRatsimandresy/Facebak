import { useContext, useEffect, useState } from "react";
import Posts from "../posts/Posts";
import Share from "../sharee/Share";
// import "./feed.css";
import { AuthContext } from "../../context/AuthContext";
import './Feed.css';
import {makeRequest as axios} from "../../axios";
export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${user.token}`;
    return config;
  })

  useEffect(() => {
    const fetchPosts = async () => {
      // const res = username
      //   ? await axios.get("/posts/profil/" + username)
      //   : await axios.get("posts/timeline/" + user.id);
      const res = await axios.get('posts');
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user.id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Posts key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
