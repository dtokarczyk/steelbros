import Menu from "../components/Menu";
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
          {children}
          <Menu />
        </Providers>
      </body>
    </html>
  );
}
