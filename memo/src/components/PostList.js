import React from "react";
import {useEffect, useState} from "react";
import PostItem from "./PostItem";

export default function PostList(){
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response =>{
            response.json().then(
                data => {
                    setPosts(data);
                }
            );
        });
    }, []);

    return(
        <div>
            <div>
                <input className="form-control" onChange={e => setNewPost(e.target.value) } value={newPost} />
            </div>
            <div>
                <ul>
                    {posts.map(post => <PostItem key={post.id} post={post} />)} 
                </ul>
            </div>
        </div>
    );
}