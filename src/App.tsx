import { useEffect } from "react";
import { app } from "@microsoft/teams-js";

function App() {
  useEffect(() => {
    async function init() {
      await app.initialize();
      const context = await app.getContext();
      console.log(context);
    }

    init();
  }, []);

  return <h1>Teams React POC</h1>;
}

export default App;