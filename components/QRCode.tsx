import Image from "next/future/image";
import { QRCodePropsType } from "../types/indexPropsTypes";

export default function QRCode(props: { data: QRCodePropsType }) {
  return (
    <div
      className="mt-5 d-flex p-4 bg-primary"
      style={{
        minHeight: "45vh",
        boxShadow:
          "inset 0 40px 50px -50px  rgba(0,0,0,0.7), inset 0 -40px 50px -50px rgba(0,0,0,0.7) ",
      }}
    >
      <div className="col-11 col-md-7 mx-auto my-auto py-5">
        <div className="bg-light mx-auto my-auto container p-3">
          <div className="row">
            <div className="col-12 col-md-3">
              <Image
                className="position-relative"
                src="/images/qrcode.png"
                alt="alt 1"
                height="220"
                width="220"
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              />
            </div>
            <div className="col my-auto">
              <h1 className="text-secondary mb-0">{props.data.title}</h1>
              <small className="fs-6">{props.data.subTitle}</small>
              <p className="text-secondary fs-4 mt-3">{props.data.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
