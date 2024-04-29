import { useEffect, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const baseUrl =
        "https://my-json-server.typicode.com/DamienAmbient/DamienAmbient.github.io/posts";
    const fetchData = async () => {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const SinglePost = ({ post }) => {
        const { title, content } = post;

        return (
            <div className=" min-w-[20rem]">
                <h2 className=" text-red-700 text-lg">{title}</h2>
                <p className=" mb-5">{content}</p>
            </div>
        );
    };

    return (
        <div className=" flex gap-5">
            {posts.map((post) => (
                <SinglePost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Posts;
