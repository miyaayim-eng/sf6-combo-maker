import { FC, memo, ReactNode, ElementType } from "react";
import styles from "./index.module.scss";

type Props = {
  element?: ElementType;
  children: ReactNode;
};

export const RecipeTitle: FC<Props> = memo(
  ({ element: Element = "p", children }) => {
    return <Element className={styles.title}>{children}</Element>;
  }
);

RecipeTitle.displayName = "RecipeTitle";
