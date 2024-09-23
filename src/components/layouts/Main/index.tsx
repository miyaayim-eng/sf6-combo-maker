import { ReactNode } from "react";

export const Main = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <main>{children}</main>;
};
