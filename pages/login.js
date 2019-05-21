import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container">
        <p className="">Login Page</p>

        <div className="login">
        <form action="">
          <div className="form-gropup">
            <label htmlFor="userNameInput">Username</label>
            <input
              type="text"
              className="form-control"
              id="userNameInput"
              aria-describedby="nameHelp"
              placeholder="Username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              type="email"
              className="form-control"
              id="passwordInput"
              aria-describedby="passwordHelp"
              placeholder="Password"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <a href="/auth/google">Sign In with Google</a>
        </div>
      </div>
    </Layout>
  );
}
