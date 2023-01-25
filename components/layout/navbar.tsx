import Link from "next/link";
import { useRouter } from "next/router";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import PinterestIcon from "../icons/pinterest";

export default function Navbar() {
  const router = useRouter();
  const activePage = router.pathname;
  console.log({ activePage });

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
              <Link href="/">
                <a className={`nav-link ${activePage == "/" && "activeLink"}`}>
                  HOME
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services">
                <a
                  className={`nav-link ${
                    activePage == "/services" && "activeLink"
                  }`}
                >
                  SERVICES
                </a>
              </Link>
            </li>
          </ul>
          <Link href="https://www.pinterest.com/">
            <a>
              <PinterestIcon fill="#286b3e" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/">
            <a>
              <FacebookIcon fill="#286b3e" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/">
            <a>
              <InstagramIcon fill="#286b3e" />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
