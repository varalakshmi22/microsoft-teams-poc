import { PublicClientApplication } from "../../node_modules/@azure/msal-browser/types";

export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: "2abc845c-15fc-414f-b319-e7da37e9b563",
    authority:
      "https://login.microsoftonline.com/0540b69a-7ff8-497e-a99c-045243c2b269",
    redirectUri: "https://microsoft-teams-poc.vercel.app/",

  },
  cache: {
    cacheLocation: "sessionStorage",
      
  },
});