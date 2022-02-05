import React from "react";

export default ({ comments }) =>{

    // Render comments
    const renderComments =comments.map(comment=>{
        return <li key={comment.id}>{comment.content}</li>;
    });

    return <ul>
        {renderComments}
    </ul>
};