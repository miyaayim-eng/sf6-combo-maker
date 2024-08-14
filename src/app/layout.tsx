import { ReactNode } from "react";
import type { Metadata } from "next";
import { notoSansJP, oswald } from "@/utils/font";
// 共通のCSS
import "@scss/foundation/_index.scss";

import { HeaderLayout } from "@/components/templates/HeaderLayout/";
import { MainLayout } from "@/components/templates/MainLayout/";

import { AppProvider } from "@/components/other/AppProvider";

export const metadata: Metadata = {
  title: "SF6 Combo Maker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${oswald.variable}`}>
      <body className={notoSansJP.className}>
        <AppProvider>
          <HeaderLayout />
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
