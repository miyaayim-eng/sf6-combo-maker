import { ReactNode } from "react";
import styles from "./layout.module.scss";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
