import React from "react";

export default ({ comments }) =>{

    // Render comments
    const renderComments =comments.map(comment=>{
        let content ;
        if(comment.status === "Approved"){
            content = comment.content;
        }
        if(comment.status === "Rejected"){
            content = "This Comment has been removed"
        }
        if(comment.status === "Pending"){
            content = "This Comment awaiting moderation";
        }
        return <li key={comment.id}>{content}</li>;
    });

    return <ul>
        {renderComments}
    </ul>
};