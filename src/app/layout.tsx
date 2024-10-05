import { ReactNode } from "react";
import type { Metadata } from "next";
import { notoSansJP, oswald } from "@/utils/font";
// 共通のCSS
import "@scss/foundation/_index.scss";

import { RecoilProvider } from "@/app/RecoilProvider";
import { UpdateUser } from "@/components/elements/User/UpdateUser/";
import { Header } from "@/components/layouts/Header/";
import { Main } from "@/components/layouts/Main/";

import { TestViewLoginUser } from "@/features/TestViewLoginUser";

export const metadata: Metadata = {
  title: "SF6 Combo Maker",
  description: "",
  robots: {
    index: false, // noindexの設定
    googleBot: {
      index: false, // Google のクローラーをブロックする場合
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${oswald.variable}`}>
      <body className={notoSansJP.className}>
        <RecoilProvider>
          <UpdateUser />
          <TestViewLoginUser />
          <Header />
          <Main>{children}</Main>
        </RecoilProvider>
      </body>
    </html>
  );
}
