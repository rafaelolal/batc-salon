import Link from "next/link";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import PinterestIcon from "../icons/pinterest";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link activeLink" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SERVICES
              </a>
            </li>
          </ul>
          <Link href="https://www.pinterest.com/">
            <a>
              <PinterestIcon />
            </a>
          </Link>
          <Link href="https://www.facebook.com/">
            <a>
              <FacebookIcon />
            </a>
          </Link>
          <Link href="https://www.instagram.com/">
            <a>
              <InstagramIcon />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
