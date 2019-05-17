import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <form action="">
        <div className="form-gropup">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            aria-describedby="nameHelp"
            placeholder="Enter name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailInput">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <small id="emailHelp" className="form-text text-muted">
            I'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="commentInput">Comment</label>
          <textarea className="form-control" id="commentInput" rows="3" />
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </Layout>
  );
}
