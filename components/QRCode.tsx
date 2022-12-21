import Image from "next/future/image";
import { QRCodePropsType } from "../types/indexPropsTypes";

export default function QRCode(props: { data: QRCodePropsType }) {
  return (
    <div className="mt-5 bg-primary d-flex p-4" style={{ minHeight: "40vh" }}>
      <div className="col-11 col-md-7 mx-auto my-auto">
        <div className="bg-light mx-auto my-auto container p-3">
          <div className="row">
            <div className="col-12 col-md-3">
              <Image
                className="position-relative"
                src="/images/qrcode.png"
                alt="alt 1"
                fill
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              />
            </div>
            <div className="col my-auto">
              <h1 className="text-secondary mb-0">{props.data.title}</h1>
              <small className="fs-5">{props.data.subTitle}</small>
              <p className="text-secondary fs-4 mt-3">{props.data.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
