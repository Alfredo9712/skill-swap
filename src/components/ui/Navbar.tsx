import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import React from "react";
import Avatar from "./Avatar";
import Auth from "./Auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between h-14 items-center font-medium">
      <p>Skill swap</p>
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
