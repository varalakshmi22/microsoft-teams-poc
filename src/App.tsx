import { useEffect, useState } from "react";
import { app, authentication } from "@microsoft/teams-js";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

type TeamsContext = any;

export default function App() {
  const [context, setContext] = useState<TeamsContext | null>(null);
  const [sdkConnected, setSdkConnected] = useState(false);

  const { instance } = useMsal();

  const login = async () => {
    await instance.loginPopup(loginRequest);
  };

  useEffect(() => {
    async function initializeTeams() {
      try {
        if (window.parent !== window) {
          await app.initialize();
          const token = await authentication.getAuthToken();
          console.log("SSO Token:", token);
          const ctx = await app.getContext();
          console.log("Teams Context:", ctx);
          setSdkConnected(true);
          setContext(ctx);
        } else {
          console.log(
            "Running outside Teams"
          );
        }
      } catch (error) {
        console.error(
          "Teams SDK Initialization Failed:",
          error
        );
      }
    }

    initializeTeams();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
      <div
        style={{
          padding: "24px",
          fontFamily: "Segoe UI",
          background: "#f5f6f8",
          minHeight: "100vh",
          minWidth: '60vw'
        }}
      >
        <h2>Teams Integration with CAWi</h2>

        <div
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "12px",
            marginTop: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,.08)",
          }}
        >
          <h2>
            Welcome👋
          </h2>

          <p>
            {context
              ? "Running inside Microsoft Teams"
              : "Running in browser preview mode"}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <Card title="User Details">
            <p>
              <strong>Name:</strong>{" "}
              {context?.user?.displayName || "-"}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {context?.user?.userPrincipalName || "-"}
            </p>

            <p>
              <strong>Tenant:</strong>{" "}
              {context?.user?.tenant?.id || "-"}
            </p>
          </Card>

          <Card title="Environment">
            <p>
              <strong>Theme:</strong>{" "}
              {context?.app?.theme || "-"}
            </p>

            <p>
              <strong>Host Client:</strong>{" "}
              {context?.app?.host?.name || "Teams"}
            </p>
          </Card>

          <Card title="Status">
            <p>
              SDK Connected{" "}
              {sdkConnected ? "✅" : "❌"}
            </p>

            <p>
              Context Loaded{" "}
              {context ? "✅" : "❌"}
            </p>
          </Card>

          <Card title="Upcoming Features">
            <button onClick={login}>
              Login with Microsoft
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "18px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h3>{title}</h3>

      <div>{children}</div>
    </div>
  );
}