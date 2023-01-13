import Image from "next/image";

export type StylistProps = {
  name: string;
  img: string;
};

export default function Stylist(props: StylistProps) {
  return (
    <div
      className="card"
      style={{
        margin: 10,
        display: "inline-block",
        height: "300px",
        width: "180px",
        border: 0,
        borderRadius: 0,
      }}
    >
      <Image
        className="stylistImg"
        alt={`A picture of stylist ${props.name}`}
        width="180"
        height="300"
        src={`/images/stylists/${props.img}`}
      />
      <div className="card-img-overlay d-flex m-2 rounded-0 border border-2">
        <p
          className="text-center mx-auto mt-auto py-1 shadow-lg fs-6"
          style={{
            backgroundColor: "#F6F2F1",
            width: "80px",
            color: "#36744A",
          }}
        >
          {props.name}
        </p>
      </div>
    </div>
  );
}
