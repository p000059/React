import React from "react";
import {useEffect, useState} from "react";
import PostItem from "./PostItem";

export default function PostList(){
    const [posts, setPosts] = useState([]);

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
        <>
            <ul>
                {posts.map(post => <PostItem key={post.id} post={post} />)} 
            </ul>
        </>
    );
}