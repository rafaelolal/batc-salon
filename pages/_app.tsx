import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppWrapper } from "../context/state";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Script
      type="text/javascript"
        src="js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AppWrapper>
  );
}
