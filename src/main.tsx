import ReactDOM from "react-dom/client";
import App from "./App";
import { msalInstance } from "./auth/authConfig";

async function bootstrap() {
  console.log("HASH:", window.location.hash);

  await msalInstance.initialize();

  if (window.location.hash.includes("code=")) {
    console.log("PROCESSING AUTH CALLBACK");

    const response =
      await msalInstance.handleRedirectPromise();

    console.log("AUTH RESPONSE", response);

    return; // TEMPORARY
  }

  ReactDOM.createRoot(
    document.getElementById("root")!
  ).render(<App />);
}

bootstrap();