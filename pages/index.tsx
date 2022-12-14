import Carousel from "../components/carousel";
import QRCode from "../components/QRCode";
import Stylists from "../components/stylists";

export default function IndexPage() {
  return (
    <div className="bg-light">
      <Carousel />
      <QRCode />
      <Stylists/>

    </div>
  );
}
