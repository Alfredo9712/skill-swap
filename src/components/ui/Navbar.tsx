import React from "react";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import Avatar from "@/components/ui/Avatar";
import Auth from "@/components/ui/Auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between h-14 items-center font-medium  py-9">
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} width={49} height={49} alt="logo" />
      </div>
      <ul className="flex gap-2 items-center">
        <li>Home</li>
        {session?.user ? (
          <Avatar img={session.user.image as string} />
        ) : (
          <li>
            <Auth />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
