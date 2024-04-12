import React, {useState, useEffect} from "react";
import { getMappedPosts } from "../utility/helpers";
import PostComponent from "./PostComponent";
import ClipLoader from "react-spinners/ClipLoader";

export default function PostContainer(props) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMappedPosts().then(data => {
            setPosts(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="posts-container flex-col items-center w-full">
            {isLoading && <ClipLoader size={150} loading={isLoading} />}
            {posts.map((post, iteration) => <PostComponent key={"p"+iteration.toString()}{...post} />)}
        </div>
    )
}