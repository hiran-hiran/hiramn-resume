type Props = {
  type?: "button" | "submit";
  loading?: boolean;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export const Button = ({
  type = "button",
  loading,
  variant,
  children,
}: Props) => {
  return (
    <button
      type={type}
      className={variant === "secondary" ? "button button-white" : "button"}
    >
      {!loading ? children : "Loading..."}
    </button>
  );
};
