import { authentication } from "@microsoft/teams-js";

export const getTeamsSsoToken =
  async (): Promise<string> => {
    return await authentication.getAuthToken();
  };