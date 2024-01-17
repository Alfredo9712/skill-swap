"use client";
import Avatar from "@/components/ui/Avatar";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React, { useState } from "react";

const variants = {
  primary: "bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r",
  secondary: "bg-gradient-to-r from-yellow-200 to-yellow-500",
  tertiary: "bg-gradient-to-r from-green-500 to-green-700",
  quaternary: "bg-gradient-to-r from-orange-600 to-orange-500",
  quinary: "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900",
  senary: "bg-gradient-to-r from-teal-200 to-lime-200",
  septenary: "bg-gradient-to-tr from-violet-500 to-orange-300",
};

type ProfileHeroProps = {
  avatarImg: string | null | undefined;
  isUsersProfile: boolean;
};

const ProfileHero = ({ avatarImg, isUsersProfile }: ProfileHeroProps) => {
  return (
    <div className={cn("h-64 relative", variants["primary"])}>
      {/* {isUsersProfile && <button>edit</button>} */}
      <div className="absolute -bottom-8 left-6">
        <Avatar
          img={avatarImg}
          className="w-20 h-20 border-2 border-sky-white"
        />
      </div>
    </div>
  );
};

export default ProfileHero;
