import Link from "next/link";

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <a className="navbar-brand" href="/">
      <i className="fas fa-align-left" />
      <style jsx>{`
        i {
          padding-right: 5px;
        }
      `}</style>
      Sean Barkley
    </a>

    <div className="container">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link prefetch href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link prefetch href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link prefetch href="/projects">
              <a className="nav-link">Projects</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link prefetch href="/twitch">
              <a className="nav-link">Twitch</a>
            </Link>
          </li>          
          <li className="nav-item">
            <Link prefetch href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
