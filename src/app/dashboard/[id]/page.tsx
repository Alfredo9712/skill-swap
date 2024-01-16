import React from "react";
import { prisma } from "../../../../prisma/prismaClient";

const Profile = async ({ params }: { params: { id: string } }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user) {
    return <div>Uh oh, it looks like there was no user found</div>;
  }
  return <div>User: {params.id}</div>;
};

export default Profile;
