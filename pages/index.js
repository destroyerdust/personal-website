import Layout from "../components/Layout.js";

const Index = () => (
  <Layout>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Test</h1>
        <p className="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>

    <div className="container">
      <p>Hello Sean</p>
    </div>
  </Layout>
);

export default Index;
