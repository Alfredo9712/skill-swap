import React, { useState } from "react";
import { prisma } from "../../../../prisma/prismaClient";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import ProfileHero from "@/components/content/ProfileComponents/ProfileHero";

const Profile = async ({ params }: { params: { id: string } }) => {
  const { user: sessionUser } = (await getServerSession(authOptions)) || {};

  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
    include: {
      profile: true,
    },
  });

  if (!user) {
    return <div>Uh oh, looks like there was no user found!</div>;
  }
  const { name } = user;
  const isUsersProfile = sessionUser?.id === user.id;

  return (
    <div>
      <ProfileHero avatarImg={user.image} isUsersProfile={isUsersProfile} />
      <div className="pt-12 px-6">
        <h1 className="text-2xl font-medium">{name}</h1>
      </div>
    </div>
  );
};

export default Profile;
