import React from "react";
import { prisma } from "../../../../prisma/prismaClient";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

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
      <h1>{`${isUsersProfile}`}</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default Profile;
