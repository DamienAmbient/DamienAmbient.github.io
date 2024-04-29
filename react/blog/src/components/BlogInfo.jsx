import React from "react";
import { useContext } from "react";
import { blogName } from "./Blog";

export default function BlogInfo() {
    useContext(blogName);
    return <div className=" text-3xl mb-8">{blogName}</div>;
}
