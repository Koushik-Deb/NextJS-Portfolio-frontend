import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montSerrat.variable} font-mont`}>
      <Component {...pageProps} />;
    </main>
  );
}
