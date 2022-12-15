import Carousel from "../components/carousel";
import QRCode from "../components/QRCode";
import Stylists from "../components/stylists";
import ViewGalleryButton from "../components/viewGalleryButton";

export default function IndexPage() {
  return (<>
    <div className="index-background">
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
      <h1>Hi there</h1>
    </div>

    <div id="index-top" className="bg-light index-top overflow-auto">
      <Carousel />
      <QRCode />
      <Stylists/>
    </div>

    <ViewGalleryButton />

    <div id="index-bottom" className="bg-light overflow-auto index-bottom">
      <h1>More stuff</h1>
    </div>
    </>
  );
}
