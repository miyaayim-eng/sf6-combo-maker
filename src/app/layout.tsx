import { ReactNode } from "react";
import type { Metadata } from "next";
import { notoSansJP, oswald } from "@/utils/font";
// 共通のCSS
import "@scss/foundation/_index.scss";

import { RecoilProvider } from "@/app/RecoilProvider";
import { UpdateUser } from "@/components/elements/User/UpdateUser/";
import { Header } from "@/components/layouts/Header/";
import { Main } from "@/components/layouts/Main/";
import { TestComponent } from "./TestComponent";

export const metadata: Metadata = {
  title: "SF6 Combo Maker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${oswald.variable}`}>
      <body className={notoSansJP.className}>
        <RecoilProvider>
          <UpdateUser />
          <Header />
          <Main>{children}</Main>
          <TestComponent />
        </RecoilProvider>
      </body>
    </html>
  );
}
