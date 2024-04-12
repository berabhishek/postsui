import React, {useState, useEffect} from "react";
import CommentComponent from "./CommentComponent";
import { getComments } from "../utility/helpers";


export default function CommentContainer(props) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(props.postId).then(data => setComments(data));
    }, []);
    return (
        <div className="comment-container flex-col items-center">
            {comments.map((comment, keyVal) => <CommentComponent key={keyVal} {...comment} />)}
        </div>
    )
}