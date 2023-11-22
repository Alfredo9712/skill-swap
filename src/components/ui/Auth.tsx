"use client";
import React from "react";
import { signIn } from "next-auth/react";

import Button from "@/components/ui/Button";

const Auth = () => {
  return (
    <Button onClick={() => signIn()} variant="secondary">
      Sign up
    </Button>
  );
};

export default Auth;
