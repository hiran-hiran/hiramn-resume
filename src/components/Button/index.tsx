import { clsx } from "clsx";
import styles from "./styles.module.scss";

type Props = {
  type?: "button" | "submit";
  loading?: boolean;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button = ({
  type = "button",
  loading,
  variant,
  onClick,
  children,
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        variant === "secondary" && styles.button__white
      )}
      onClick={onClick}
    >
      {!loading ? children : "Loading..."}
    </button>
  );
};
