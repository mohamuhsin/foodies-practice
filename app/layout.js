import MainHeader from "@/components/main-header";
import "./globals.css";
import MainHeaderBackground from "@/components/main-header-background";

import { quicksand } from "./fonts/fonts";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>
        <MainHeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
