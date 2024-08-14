import { memo, FC } from "react";
import { Header } from "@/components/organisms/layout/Header";

export const HeaderLayout: FC = memo(() => {
  return (
    <header>
      <Header />
    </header>
  );
});
