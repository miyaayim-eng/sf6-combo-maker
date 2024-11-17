import { ReactNode, FC, memo } from "react";
import styles from "./index.module.scss";

type Props = {
  children: ReactNode;
  paddingBlock?: boolean;
};

export const ContentsWidth: FC<Props> = memo(
  ({ children, paddingBlock = false }) => {
    const className = paddingBlock
      ? `${styles.outer} ${styles.inner}`
      : styles.outer;

    return <div className={className}>{children}</div>;
  }
);

ContentsWidth.displayName = "ContentsWidth";
