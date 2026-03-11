import Menu from "../components/Menu";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import "../styles/index.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="dark:bg-black">
        <Providers>
          <SmoothScroll />
          {children}
          <Footer />
          <Menu />
        </Providers>
      </body>
    </html>
  );
}
