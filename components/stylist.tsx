export type StylistProps = {
  name: string,
  img: string
};

export default function Stylist(props: StylistProps) {
  return <div style={{margin: 10, display: "inline-block"}}>
    <img height="200" src={`images/stylists/${props.img}.jpg`}></img>
    <p>{props.name}</p>
  </div>
}
