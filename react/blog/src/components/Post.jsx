import React, { useState, useEffect } from "react";

const Post = () => {
    const [post, setPost] = useState([]);
    const [likes, setLikes] = useState(0);
    const baseUrl =
        "https://my-json-server.typicode.com/DamienAmbient/DamienAmbient.github.io/posts";

    const fetchData = async () => {
        try {
            const response = await fetch(`${baseUrl}/1`);
            const data = await response.json();
            setPost(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const likeThis = () => {
        setLikes(likes + 1);
    };

    useEffect(() => {
        const likeBtn = document.getElementById("like");
        if (likeBtn) {
            likeBtn.addEventListener("click", likeThis);
        }
        return () => {
            if (likeBtn) {
                likeBtn.removeEventListener("click", likeThis);
            }
        };
    }, [likes]);

    return (
        <article className="post">
            <div className="cover-container">
                <img src={post.cover} alt={post.title} />
            </div>
            <div className="post-footer">
                <h3>
                    {post.title} {post.id}
                </h3>
                <p>{post.content}</p>
                <button id="like">
                    Like this post <strong>{likes}</strong>
                </button>
            </div>
        </article>
    );
};

export default Post;
