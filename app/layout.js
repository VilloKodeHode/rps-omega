import { Inter } from "next/font/google";
import "./globals.css";
import { RPSSplashScreen } from "./components/RPS/SplashScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${inter.className}`}>
        <>
        {/* <RPSSplashScreen/> */}
        {children}
        </>
        </body>
      {/* <body className={`overflow-x-hidden ${inter.className}`}><Suspense fallback={<Loading />}>{children}</Suspense></body> */}
    </html>
  );
}


