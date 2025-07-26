import Link from "next/link";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import PinterestIcon from "../icons/pinterest";

export default function Footer() {
  return (
    <div
      className="bg-primary overflow-hidden text-light py-5 "
      style={{ boxShadow: "inset 0 40px 50px -50px  rgba(0,0,0,0.7)" }}
    >
      <div className="row row-cols-1 row-cols-md-2 justify-content-center">
        <div className="col-12 col-md-auto text-center mb-5 mb-md-0">
          <div className="row row-cols-1 justify-content-center">
            <div className="col-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="d-block mx-auto mb-1"
                src="/batc/images/white logo without bg.png"
                height="90px"
                width="90px"
                alt="The 'Beauty and the Chic' logo"
                style={{ objectFit: "cover" }}
              />

              <Link href="https://www.pinterest.com/">
                <a>
                  <PinterestIcon fill="#FFFFFF" />
                </a>
              </Link>
              <Link href="https://www.facebook.com/">
                <a>
                  <FacebookIcon fill="#FFFFFF" />
                </a>
              </Link>
              <Link href="https://www.instagram.com/">
                <a>
                  <InstagramIcon fill="#FFFFFF" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-8">
          <div className="row row-cols-3">
            <div className="col text-break">
              <h5 className="fw-bolder text-center">Location</h5>
              <h6 className="text-center fw-lighter">
                <span className="fw-semibold">1145 North Amazon st,</span>{" "}
                Plainfield, NJ
              </h6>
              <h6 className="text-center">Please visit us!</h6>
            </div>

            <div className="col text-break">
              <h5 className="fw-bolder text-center">
                Call For An Appointment!
              </h5>
              <h6 className="text-center fw-lighter ">+1 (555) 555 5556</h6>
              <h6 className="text-center fw-lighter">
                beautyandthechic@gmail.com
              </h6>
            </div>

            <div className="col text-break">
              <h5 className="fw-bolder text-center">Hours</h5>
              <h6 className="text-center fw-lighter">Mon-Fri 10-8</h6>
              <h6 className="text-center fw-lighter">Saturday 9-4</h6>
              <h6 className="text-center fw-lighter">Sunday Closed</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
