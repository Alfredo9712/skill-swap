import React from "react";

interface NavBarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavBarProps) => {
  return <div>{children}</div>;
};

export default Navbar;
