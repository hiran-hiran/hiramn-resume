import { clsx } from "clsx";
import Link from "next/link";

type Props = {
  variant?: "primary" | "secondary";
  href: string;
  children: React.ReactNode;
};

export const LinkButton = ({ variant, href, children }: Props) => {
  return (
    <Link
      className={clsx(
        "block w-[140] cursor-pointer rounded-4xl bg-primary p-3 text-center font-bold text-white transition-opacity duration-200 ease-in hover:opacity-80",
        variant === "secondary" && "!text-primary bg-white",
        "print-none"
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
