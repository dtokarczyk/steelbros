"use client";

import React from "react";

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "primary";
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function getVariantClasses(variant: "light" | "dark" | "primary"): string {
  if (variant === "dark") {
    return "inline-flex items-center justify-center border border-black bg-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white [font-variant:small-caps] transition-colors duration-200 hover:bg-white hover:text-black";
  }

  if (variant === "primary") {
    return "inline-flex items-center justify-center border border-primary bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white [font-variant:small-caps] transition-colors duration-200 hover:bg-primary/90";
  }

  return "inline-flex items-center justify-center border border-transparent bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black [font-variant:small-caps] transition-colors duration-200 hover:bg-primary hover:text-white";
}

export default function Button(props: ButtonProps) {
  const { as = "button", className = "", children, variant = "light", ...rest } = props as ButtonProps & {
    as: "button" | "a";
  };

  const classes = `${getVariantClasses(variant)} ${className}`.trim();

  if (as === "a") {
    const linkProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

