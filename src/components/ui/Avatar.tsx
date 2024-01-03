import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AvatarProps {
  img: string | undefined | null;
  href: string;
}

const Avatar = ({ img, href }: AvatarProps) => {
  return (
    <div className="relative w-8 h-8 rounded-full">
      <Link href={href}>
        <Image
          src={img ?? "/generic-profile.png"}
          alt="profile image"
          fill
          className="rounded-full"
        />
      </Link>
    </div>
  );
};

export default Avatar;
