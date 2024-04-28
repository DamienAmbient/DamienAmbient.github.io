import { useContext } from "react";
import { PostContext } from "./Post";

const PostTitle = () => {
    const post = useContext(PostContext);
    return <h3>{post.title}</h3>;
};

export default PostTitle;
