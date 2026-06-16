import Card from "@mui/material/Card";


type Props = {
  profile: any;
};

const UserProfile = ({ profile }: Props) => {
    console.log("User :", profile);
  return (
    <Card title="User Profile">
      <p>
        <strong>Name:</strong>{" "}
        {profile?.displayName}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {profile?.mail}
      </p>

      <p>
        <strong>Job title:</strong>{" "}
        {profile?.jobTitle}
      </p>
    </Card>
  );
};

export default UserProfile;