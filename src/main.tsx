import ReactDOM from "react-dom/client";
import App from "./App";
import { msalInstance } from "./authConfig";

async function bootstrap() {
  await msalInstance.initialize();

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <App />
  );
}

bootstrap();