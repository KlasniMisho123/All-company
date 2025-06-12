import type { Metadata } from "next";
import { Exo_2, Inter, Poppins, Space_Mono, Urbanist } from "next/font/google";
import "./globals.css";


const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});
const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["700"] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export const Metadata = {
  title: "NightFall Webworks",
  icons: {
    icon: "./nightfallwebworks.avif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
