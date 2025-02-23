import { clsx } from "clsx";

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
        "block w-[140] cursor-pointer rounded-4xl bg-primary p-3 text-center font-bold text-white transition-opacity duration-200 ease-in hover:opacity-80",
        variant === "secondary" && "!text-primary bg-white"
      )}
      onClick={onClick}
    >
      {!loading ? children : "Loading..."}
    </button>
  );
};
