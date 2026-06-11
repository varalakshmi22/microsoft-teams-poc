import Card from "./Cards";

type Props = {
  context: any;
};

const UserProfile = ({ context }: Props) => {
    console.log("User :", context);
  return (
    <Card title="User Profile">
      <p>
        <strong>Name:</strong>{" "}
        {context?.user?.displayName}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {context?.user?.userPrincipalName}
      </p>

      <p>
        <strong>Tenant:</strong>{" "}
        {context?.user?.tenant?.id}
      </p>
    </Card>
  );
};

export default UserProfile;