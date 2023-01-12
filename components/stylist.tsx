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
        width: "200px",
        border: 0,
        borderRadius: 0,
      }}
    >
      <Image
        className="stylistImg"
        alt={`A picture of stylist ${props.name}`}
        width="200"
        height="300"
        src={`/images/stylists/${props.img}`}
      />
      <div className="card-img-overlay">
        <p className="text-center" style={{ backgroundColor: "white" }}>
          {props.name}
        </p>
      </div>
    </div>
  );
}
