import Header from "./Header";

const layoutStyle = {};

const Dashboard = props => (
  <div style={layoutStyle}>
    <Header />
    <div>{props.children}</div>
  </div>
);

export default Dashboard;
