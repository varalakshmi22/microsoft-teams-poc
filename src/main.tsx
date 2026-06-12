import ReactDOM from "react-dom/client";
import App from "./App";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./auth/authConfig";

async function bootstrap() {
  await msalInstance.initialize();

  const res =await msalInstance.handleRedirectPromise();
  console.log("Redirect Response:", res);

  ReactDOM.createRoot(
    document.getElementById("root")!
  ).render(
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  );
}

bootstrap();