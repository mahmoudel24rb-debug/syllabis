import Link from "next/link";
import type { ReactNode } from "react";

type ButtonColor = "primary" | "secondary" | "primary-destructive";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  children: ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  href?: string;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm gap-1.5",
  md: "px-4 py-2.5 text-sm gap-1.5",
  lg: "px-[18px] py-2.5 text-md gap-2",
  xl: "px-5 py-3 text-md gap-2",
};

const colorClasses: Record<ButtonColor, string> = {
  primary:
    "bg-brand-600 text-white border border-brand-600 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(10,30,61,0.5)] hover:bg-brand-700 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_0_rgba(10,30,61,0.6)] active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)]",
  secondary:
    "bg-white text-neutral-700 border border-neutral-300 shadow-[0_1px_2px_0_rgba(16,24,40,0.05),inset_0_-1px_0_0_rgba(16,24,40,0.05)] hover:bg-neutral-50 hover:shadow-[0_1px_3px_0_rgba(16,24,40,0.1),inset_0_-1px_0_0_rgba(16,24,40,0.05)] active:shadow-[inset_0_1px_3px_0_rgba(16,24,40,0.1)]",
  "primary-destructive":
    "bg-red-600 text-white border border-red-600 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_1px_2px_0_rgba(220,38,38,0.5)] hover:bg-red-700 active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)]",
};

export function Button({
  children,
  color = "primary",
  size = "md",
  href,
  iconLeading,
  iconTrailing,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 ${sizeClasses[size]} ${colorClasses[color]} ${className}`;

  const content = (
    <>
      {iconLeading && <span className="[&>*]:size-5">{iconLeading}</span>}
      {children}
      {iconTrailing && <span className="[&>*]:size-5">{iconTrailing}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
