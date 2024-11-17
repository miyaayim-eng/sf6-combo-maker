import { ReactNode, FC, memo } from "react";
import styles from "./index.module.scss";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  formAction?: (formData: FormData) => Promise<void>;
  disabled?: boolean;
  // loading?: boolean;
};

export const ActionButton: FC<Props> = memo(
  ({ children, onClick, formAction, disabled }) => {
    return (
      <button
        onClick={onClick}
        formAction={formAction}
        disabled={disabled}
        className={styles.button}
      >
        <span className={styles.text}>{children}</span>
      </button>
    );
  }
);

ActionButton.displayName = "ActionButton";
