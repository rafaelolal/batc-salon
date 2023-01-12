import Image from "next/image";

export type StylistProps = {
  name: string;
  img: string;
};

export default function Stylist(props: StylistProps) {
  return <div style={{ margin: 10, display: "inline-block" }}>
    <Image
      alt={`A picture of stylist ${props.name}`}
      width="200"
      height="200"
      src={`/images/stylists/${props.img}`}
    />
    <p>{props.name}</p>
  </div>;
}
