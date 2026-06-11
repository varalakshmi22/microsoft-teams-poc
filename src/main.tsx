import ReactDOM from "react-dom/client";
import App from "./App";
import { msalInstance } from "./auth/authConfig";

async function bootstrap() {
  await msalInstance.initialize();
  await msalInstance.handleRedirectPromise();

  ReactDOM.createRoot(
    document.getElementById("root")!
  ).render(<App />);
}

bootstrap();