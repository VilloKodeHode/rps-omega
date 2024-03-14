import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RPS-Omega",
  description: "Rock Paper Scissors, with a lot more options!",
  icons: {
    icon: "/logo-omega.svg",
  }
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


