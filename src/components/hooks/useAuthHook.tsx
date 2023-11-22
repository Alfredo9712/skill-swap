import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = async ({ children }: AuthProviderProps) => {
  const { user } = (await getServerSession(authOptions)) || {};

  if (!user) {
    return redirect("/");
  }
  return <div>useAuthHook</div>;
};

export default AuthProvider;
