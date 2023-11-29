"use client";
import React from "react";
import { signIn } from "next-auth/react";

import Button from "@/components/ui/Button";

interface AuthProps {
  className?: string;
}

const AuthButton = ({ className }: AuthProps) => {
  return (
    <Button
      onClick={() => signIn()}
      variant="secondary"
      className={className && className}
    >
      Sign up
    </Button>
  );
};

export default AuthButton;
