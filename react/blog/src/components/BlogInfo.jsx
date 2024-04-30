import React from "react";
import { useContext } from "react";
import { BlogContext } from "./Blog";

export default function BlogInfo() {
    const blogName = useContext(BlogContext);
    return <div className="text-3xl mb-8">{blogName}</div>;
}
