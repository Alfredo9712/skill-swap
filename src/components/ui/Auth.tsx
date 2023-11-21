"use client";
import React from "react";
import { signIn } from "next-auth/react";

import Button from "./Button";

const Auth = () => {
  return <Button onClick={() => signIn()}>Sign in</Button>;
};

export default Auth;
