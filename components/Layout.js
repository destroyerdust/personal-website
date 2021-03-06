import Header from "./Header";
import NavBar from "./NavBar";

const layoutStyle = {};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    <NavBar />
    <div>{props.children}</div>
  </div>
);

export default Layout;
