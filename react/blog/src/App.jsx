import "./App.css";
// import Blog from "./components/Blog";
// import Post from "./components/Post";
// import Posts from "./components/Posts";
import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={`about`}>About</Link>
                    </li>
                    <li>
                        <Link to={`contact`}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default App;
