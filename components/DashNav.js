import Link from "next/link";

const DashNav = props => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Admin Dashboard
    </a>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            {props.name}
          </a>
        </li>
        <li className="nav-item">
          <a class="navbar-brand" href="#">
            <img
              src={props.image}
              className="d-inline-block align-top"
              width="30"
              height="30"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .dash-nav-profile-img {
        height: 30px;
        width: 30px;
      }
    `}</style>
  </nav>
);

export default DashNav;
