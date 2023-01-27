import Image from "next/image";

export type StylistProps = {
  name: string;
  img: string;
};

export default function Stylist(props: StylistProps) {
  return (
    <div className="col-auto">
      <div
        className="card"
        style={{
          margin: 10,
          display: "inline-block",
          height: "370px",
          width: "250px",
          border: 0,
          borderRadius: 0,
        }}
      >
        <Image
          className="stylistImg"
          alt={`A picture of stylist ${props.name}`}
          width="250"
          height="370"
          src={`/images/stylists/${props.img}`}
        />
        <div className="card-img-overlay d-flex m-2 rounded-0 border border-2">
          <p
            className="text-center bg-light mx-auto mt-auto py-1 shadow-lg fs-6 text-primary"
            style={{
              width: "80px",
            }}
          >
            {props.name}
          </p>
        </div>
      </div>
    </div>
  );
}
