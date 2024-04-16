import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"] , weight: '400'});

export const metadata = {
  title: "Niranjan Sabarinath",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} main`}>{children}</body>
    </html>
  );
}
