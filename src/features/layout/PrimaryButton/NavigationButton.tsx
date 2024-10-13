import { ReactNode, FC, memo } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

type Props = {
  children: ReactNode;
  href: string;
};

export const NavigationButton: FC<Props> = memo(({ children, href }) => {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
});

NavigationButton.displayName = "NavigationButton";
