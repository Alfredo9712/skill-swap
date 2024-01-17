"use client";
import Avatar from "@/components/ui/Avatar";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React, { useState } from "react";

const variants = {
  primary: "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
};

type ProfileHeroProps = { avatarImg: string | null | undefined };

const ProfileHero = ({ avatarImg }: ProfileHeroProps) => {
  return (
    <div className={cn("h-56 relative", variants["primary"])}>
      <div className="absolute -bottom-5 left-3">
        <Avatar img={avatarImg} className="w-12 h-12" />
      </div>
    </div>
  );
};

export default ProfileHero;
