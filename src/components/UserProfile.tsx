import Card from "./Cards";

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

      
    </Card>
  );
};

export default UserProfile;