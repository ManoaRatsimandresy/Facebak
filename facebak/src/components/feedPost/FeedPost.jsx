import React, { useContext, useEffect } from 'react';
import '../posts/posts.css';
import '../../Style.css';
import pic from '../../assets/profile-pic.png';
import like from '../../assets/like-blue.png';
import commentsImg from '../../assets/comments.png';
import share from '../../assets/share.png';
import feed from '../../assets/feed-image-2.png';
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { makeRequest as axios } from '../../axios';

export default function FeedPost({post}) {
    const {user, dispatch} = useContext(AuthContext);
    const [reactions, setReactions] = useState([]);
    const [comments, setComments] = useState([]);

    axios.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${user.token}`;
        return config;
    })

    const userReaction = reactions.filter((reaction) => {
        return reaction.userId == user.id;
        }).length > 0 
        ? reactions.filter((reaction) => {
                return reaction.userId == user.id;
            })[0] 
        : {type: "DISLIKE", userId: user.id, postId: post.id};

    const switchReaction = () => {
        userReaction.type == "LIKE" ? dislikePost() : likePost();
    }

    const likePost = async () => {
        let newType = userReaction.type == "LIKE" ? "DISLIKE" : "LIKE";
        const res = await axios.post(`/posts/${post.id}/reactions`, {
            type: newType,
            userId: user.id
        })
        const reacts = await axios.get(`/posts/${post.id}/reactions`);
        setReactions(reacts.data);
    }

    const dislikePost = async () => {
        let newType = userReaction.type == "LIKE" ? "DISLIKE" : "LIKE";
        const res = await axios.delete(`/posts/${post.id}/reactions`, {
            data : {
                type: newType,
                userId: user.id
            }
        })
        const reacts = await axios.get(`/posts/${post.id}/reactions`);
        setReactions(reacts.data);
    }

    useEffect(() => {
        const fetchReactions = async () => {
            const res = await axios.get(`/posts/${post.id}/reactions`);
            setReactions(res.data);
        };
        const fetchComms = async () => {
            const res = await axios.get(`/posts/${post.id}/comments`);
            setComments(res.data);
        };
        fetchReactions();
        fetchComms();
    },[]);

    return (
        <div className="post_container">
        <div className="post_row">
            <div className="user_profile">
            <Link href="profile.html"><img src={pic} alt="" /></Link>
            <div>
                <p>{post.user.username}</p>
                <span>{(new Date(post.createdAt)).toDateString()}</span>
            </div>
            </div>
            <Link href="#"><i className="fas fa-ellipsis-v"></i></Link>
        </div>


        <p className="post _text">{post.content}</p>
        <img src={feed} alt="" className="post_img" />

        <div className="post_row">
            <div className="activity_icons">
            <div><img onClick={() => switchReaction()} src={like} alt="" style={{filter: `saturate(${userReaction.type == "LIKE" ? "1" : "0" })`}} />{ reactions.length } </div>
            <div><img src={commentsImg} alt="" />{ post._count.comments }</div>
            <div><img src={share} alt="" />20</div>
            </div>
            <div className="post_profile_icon">
            <Link href="profile.html"><img src={pic} alt="" /></Link> <i className="fas fa-caret-down"></i>
            </div>
        </div>
        {comments.map((comment) => {
            return (
                <div key={comment.id} className="post_row" style={{marginTop: '1rem', marginBottom: '.5rem', justifyContent: 'start', gap: '.5rem'}}>
                    <span style={{fontWeight: 'bold', margin: 0}}>{`${comment.user.username} : `}</span>
                    <span>
                        {comment.content}
                    </span>
                </div>
            )
        })}
        </div>
    )
}

