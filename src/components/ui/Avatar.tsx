import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AvatarProps {
  img: string | undefined | null;
  href?: string;
  className?: string;
}

const Avatar = ({ img, href, className }: AvatarProps) => {
  return (
    <div className={cn("relative w-8 h-8 rounded-full", className)}>
      {!href ? (
        <Image
          src={img ?? "/generic-profile.png"}
          alt="profile image"
          fill
          className="rounded-full"
        />
      ) : (
        <Link href={href}>
          <Image
            src={img ?? "/generic-profile.png"}
            alt="profile image"
            fill
            className="rounded-full"
          />
        </Link>
      )}
    </div>
  );
};

export default Avatar;
