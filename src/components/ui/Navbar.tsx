import React from "react";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import Avatar from "@/components/ui/Avatar";

interface NavbarProps {
  avatarImg: string | undefined | null;
}

const Navbar = async ({ avatarImg }: NavbarProps) => {
  return (
    <nav className="flex justify-between h-14 items-center font-medium  py-9">
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} width={49} height={49} alt="logo" />
      </div>
      <ul className="flex gap-2 items-center">
        <li>Home</li>
        <Avatar img={avatarImg} />
      </ul>
    </nav>
  );
};

export default Navbar;
