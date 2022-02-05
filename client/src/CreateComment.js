import React , {useState} from "react";
import axios from "axios";

// Creates a comment for a particular postId

export default ({postId}) =>{
    const [content , setContent]= useState('');

    const onSubmit = async(event) =>{
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
        content
        });

        setContent('');
    };
    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Add comments:</label>
                <input
                 value={content}
                 onChange={e => setContent(e.target.value)}
                 className="form-control"
                />
            </div>
            <button className="btn btn-primary">Comment</button>
        </form>
    </div>;
};