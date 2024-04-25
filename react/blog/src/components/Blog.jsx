import React from "react";

function Blog({ post }) {
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
            </div>
        </article>
    );
}

export default Blog;
