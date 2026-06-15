import Card from "./Cards";

type Props = {
  token: string;
  onGetToken: () => void;
};

const SsoStatus = ({
  token,
  onGetToken,
}: Props) => {
  return (
    <Card title="SSO Status">
      <p>
        Token Received{" "}
        {token ? "✅" : "❌"}
      </p>

      <button onClick={onGetToken}>
        Get SSO Token
      </button>
    </Card>
  );
};

export default SsoStatus;