import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <main>
                <h1 className="text-5xl text-red-700">About</h1>
                <p className=" mt-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat quis in harum magni nobis, et soluta, molestiae
                    eum, obcaecati sit beatae. Rerum nemo necessitatibus quae
                    laborum perferendis pariatur saepe repellat! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Harum atque
                    facilis fugit voluptatibus dolore consequuntur numquam, quas
                    hic quam debitis suscipit ipsa itaque cum. Culpa aut
                    voluptatem tenetur error corporis.
                </p>
            </main>
        </div>
    );
}
