import React from "react";

const Profile = ({ params }: { params: { id: string } }) => {
  return <div>User: {params.id}</div>;
};

export default Profile;
