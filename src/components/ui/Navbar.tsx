"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Avatar from "@/components/ui/Avatar";
import Link from "next/link";

interface NavbarProps {
  avatarImg: string | undefined | null;
}

const Navbar = ({ avatarImg }: NavbarProps) => {
  const pathname = usePathname();
  const isDashBoard = pathname === "/dashboard";
  return (
    <nav className="flex justify-between h-14 items-center font-medium py-9">
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} width={40} height={40} alt="logo" />
      </div>
      <ul className="flex gap-2 items-center">
        {!isDashBoard && <Link href="/dashboard">Home </Link>}
        <Avatar img={avatarImg} />
      </ul>
    </nav>
  );
};

export default Navbar;
