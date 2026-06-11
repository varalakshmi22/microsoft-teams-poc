import Card from "./Cards";

type Props = {
  context: any;
  profile: any;
};

const UserProfile = ({ context,profile }: Props) => {
    console.log("User :", context.user);
  return (
    <Card title="User Profile">
      <p>
        <strong>Name:</strong>{" "}
        {profile.displayName}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {profile.userPrincipalName}
      </p>

      
    </Card>
  );
};

export default UserProfile;