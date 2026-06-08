import ReactDOM from "react-dom/client";
import App from "./App";
import { msalInstance } from "./authConfig";

async function bootstrap() {
  await msalInstance.initialize();

  const response = await msalInstance.handleRedirectPromise();

  console.log("Redirect Response:", response);

  if (response) {
    console.log("Account:", response.account);

    const tokenResponse = await msalInstance.acquireTokenSilent({
      account: response.account!,
      scopes: ["User.Read"],
    });

    console.log("Access Token:", tokenResponse.accessToken);

    const graphResponse = await fetch(
      "https://graph.microsoft.com/v1.0/me",
      {
        headers: {
          Authorization: `Bearer ${tokenResponse.accessToken}`,
        },
      }
    );

    const profile = await graphResponse.json();

    console.log("Graph Profile:", profile);
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <App />
  );
}

bootstrap();