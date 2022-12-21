import Carousel from "../components/carousel";
import QRCode from "../components/QRCode";
import Stylists from "../components/stylists";
import ViewGalleryButton from "../components/viewGalleryButton";
import Footer from "../components/layout/footer";

export default function IndexPage() {
  return (<>
    <div className="index-background">
      <h1>This goes in the background area</h1>
      <p>This is a placeholder</p>
      <p>Note that it wont scroll</p>
      <p>Press Esc to get back to the main page</p>
    </div>

    <div id="index-top" className="top-animated-shown bg-light overflow-auto">
      <Carousel />
      <QRCode />
      <Stylists/>
    </div>

    <ViewGalleryButton />

    <div id="index-bottom" className="bottom-animated-shown bg-light overflow-auto">
      <h1>More stuff</h1>
      <Footer />
    </div>
  </>
  );
}
