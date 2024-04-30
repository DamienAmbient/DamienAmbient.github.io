import React from "react";
import { createContext } from "react";
import Posts from "./Posts";
// import Post from "./Post";
import Layout from "./Layout";

export const BlogContext = createContext("Default Blog Name");

function Blog() {
    return (
        <BlogContext.Provider value="My blog">
            <Layout>
                <Posts />
            </Layout>
        </BlogContext.Provider>
    );
}

export default Blog;
