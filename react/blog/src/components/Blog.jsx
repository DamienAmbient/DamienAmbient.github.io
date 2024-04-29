import React from "react";
import { createContext } from "react";
import Posts from "./Posts";
// import Post from "./Post";
import Layout from "./Layout";

const BlogContext = createContext("");
export const blogName = "My blog";
function Blog() {
    return (
        <BlogContext.Provider value={blogName}>
            <Layout>
                <Posts />
            </Layout>
        </BlogContext.Provider>
    );
}

export default Blog;
