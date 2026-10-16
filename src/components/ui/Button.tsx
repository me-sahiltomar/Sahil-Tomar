import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none";

    const variantStyles = {
      primary:
        "bg-[#09090B] text-white shadow-xs hover:bg-zinc-800 active:bg-black",
      secondary:
        "bg-[#F4F4F5] text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300",
      outline:
        "border border-[#E4E4E7] bg-white text-zinc-900 shadow-xs hover:bg-zinc-50 hover:border-zinc-300 active:bg-zinc-100",
      ghost:
        "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 active:bg-zinc-200",
      "dark-outline":
        "border border-zinc-700 bg-transparent text-white hover:bg-zinc-900 hover:border-zinc-500 active:bg-zinc-800",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-xs h-8 gap-1.5",
      md: "px-4 py-2 text-sm h-10 gap-2",
      lg: "px-5 py-2.5 text-sm sm:text-base h-11 gap-2.5",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
