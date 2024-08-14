import { ReactNode } from "react";
import { Main } from "@/components/organisms/layout/Main/";

export const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <main>
      <Main children={children} />
    </main>
  );
};
