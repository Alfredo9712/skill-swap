"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Avatar from "@/components/ui/Avatar";
import Link from "next/link";
import { Session } from "next-auth";

interface NavbarProps {
  session: Session;
}

const Navbar = ({ session }: NavbarProps) => {
  const { user } = session || {};
  console.log(user);
  const pathname = usePathname();
  const isDashBoard = pathname === "/dashboard";
  return (
    <nav className="flex justify-between h-14 items-center font-medium py-9">
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} width={40} height={40} alt="logo" />
      </div>
      <ul className="flex gap-2 items-center">
        {user && user.image && <Avatar img={user.image} href={`/dashboard/`} />}
      </ul>
    </nav>
  );
};

export default Navbar;
