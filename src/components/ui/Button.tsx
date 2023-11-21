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
        primary: "bg-blue-400",
        danger: "bg-red-500",
        alert: "bg-yellow-500",
      },
      size: {
        small: "py-2 px-4",
        large: "text-xl py-3 px-6",
      },
    },
    defaultVariants: {
      size: "small",
      variant: "primary",
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
