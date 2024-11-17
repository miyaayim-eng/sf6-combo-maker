import { FC, memo, ReactNode } from "react";
import styles from "./index.module.scss";

type Props = {
  children: ReactNode;
};

export const RecipeDescription: FC<Props> = memo(({ children }) => {
  return <p className={styles.description}>{children}</p>;
});

RecipeDescription.displayName = "RecipeDescription";
