import { Noto_Sans_JP, Oswald } from "next/font/google";

export const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ja",
  display: "swap",
});

export const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});
