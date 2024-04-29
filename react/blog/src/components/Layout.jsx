// import PostMain from "./PostMain";
import Header from "./Header";
import Posts from "./Posts";

const Layout = ({ children }) => {
    return (
        <div>
            <Header> {children}</Header>
            {/* <PostMain></PostMain> */}
            <Posts></Posts>
        </div>
    );
};

export default Layout;
