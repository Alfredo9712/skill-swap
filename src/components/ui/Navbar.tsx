import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import React from "react";
import Avatar from "./Avatar";
import Auth from "./Auth";

interface NavBarProps {
  children: React.ReactNode;
}

const Navbar = async ({ children }: NavBarProps) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <nav className="p-2 flex justify-between">
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
      <div>{children}</div>
    </div>
  );
};

export default Navbar;
