import { app } from "@microsoft/teams-js";

export const getTeamsContext = async () => {
  await app.initialize();

  return await app.getContext();
};