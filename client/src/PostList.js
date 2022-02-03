import React, {useState, useEffect} from "react";
import axios from "axios";
import CreateComment from "./CreateComment";

export default () =>{
    // Default value given is object , so we have given an empty object and not empty array
    const [posts, setPosts ]= useState({});

    // This will fetch the value and setPost to the object
    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:4000/posts");
        setPosts(res.data);
    };

    // Added an empty array , This will execute this method once.

    useEffect(()=>{
        fetchPosts()
    }, []);

    console.log(posts);

    // Rendering the response

    const RenderPost = Object.values(posts).map (post=>{
        return <div className="card" 
        style={{width:"30%", marginBottom:"30px"}}
        key={post.id}>
            <div className="card-body">
                <h3>{post.title}</h3>
                < CreateComment postId={post.id} />
            </div>

        </div>
    });


    return <div className="d-flex flex-row flex-wrap justify-content-between"> {RenderPost} </div>;

};