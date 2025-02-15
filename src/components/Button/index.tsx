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
      className={variant === "secondary" ? "button button-white" : "button"}
      onClick={onClick}
    >
      {!loading ? children : "Loading..."}
    </button>
  );
};
