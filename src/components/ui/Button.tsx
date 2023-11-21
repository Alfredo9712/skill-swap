"use client";

import React, { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

// Customized button variations
const buttonVariants = cva(
  `px-3 py-2 rounded-xl transition-all hover:ring-2 ring-indigo-300 hover:text-white`,
  {
    variants: {
      variant: {
        primary: "border-2 border-black rounded-full",
        secondary: "border-2 border-black rounded-full bg-black text-white",
      },
      size: {
        default: "py-1 px-4 ",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  children,
  variant,
  size,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn(buttonVariants({ className, variant, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
