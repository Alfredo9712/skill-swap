import Image from "next/image";
import React from "react";

interface AvatarProps {
  img: string;
}

const Avatar = ({ img }: AvatarProps) => {
  return (
    <div className="relative w-8 h-8 rounded-full">
      <Image src={img} alt="profile image" fill className="rounded-full" />
    </div>
  );
};

export default Avatar;
