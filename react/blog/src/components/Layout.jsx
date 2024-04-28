import PostMain from "./PostMain";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header> {children}</Header>
            <PostMain></PostMain>
        </div>
    );
};

export default Layout;
