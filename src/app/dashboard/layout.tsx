import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import Navbar from "@/components/ui/Navbar";
import { prisma } from "../../../prisma/prismaClient";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email ?? "",
    },
  });

  if (!session?.user) {
    redirect("/");
  }

  return (
    <section>
      <Navbar session={session} />
      {children}
    </section>
  );
}
