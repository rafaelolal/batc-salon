import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppWrapper } from "../context/state";
import Navbar from "../components/layout/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Navbar />
      <Component {...pageProps} />
    </AppWrapper>
  );
}
