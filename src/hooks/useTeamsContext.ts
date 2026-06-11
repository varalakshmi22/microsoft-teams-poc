import { useEffect, useState } from "react";
import { app } from "@microsoft/teams-js";

export const useTeamsContext = () => {
  const [context, setContext] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        await app.initialize();

        const ctx = await app.getContext();

        setContext(ctx);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, []);

  return { context, loading };
};