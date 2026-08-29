import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  children?: ReactNode;
};

export default function Button({
  variant = "primary",
  children,
  className,
  ...rest
}: Props) {
  const base =
    "px-4 py-2 rounded-lg font-semibold text-sm transition hover:shadow-md";
  const primary = `${base} bg-blue-600 text-white hover:bg-blue-700`;
  const ghost = `${base} bg-transparent text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-blue-600`;
  const cls = variant === "primary" ? primary : ghost;

  return (
    <button className={className ? `${cls} ${className}` : cls} {...rest}>
      {children}
    </button>
  );
}
