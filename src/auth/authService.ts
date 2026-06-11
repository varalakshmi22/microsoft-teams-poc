import { msalInstance } from "./authConfig";

const graphScopes = [
  "User.Read",
  "Calendars.Read",
  "Mail.Read",
];

export const login = async () => {
  const response = await msalInstance.loginPopup({
    scopes: graphScopes,
    prompt: "select_account",
  });

  return response;
};

export const getGraphAccessToken = async () => {
  let account = msalInstance.getAllAccounts()[0];
  console.log("Current account:", account);

  if (!account) {
    const loginResponse = await login();

    account = loginResponse.account!;
  }

  const tokenResponse =
    await msalInstance.acquireTokenSilent({
      account,
      scopes: graphScopes,
    });
console.log("Token response:", tokenResponse);
  return tokenResponse.accessToken;
};

export const logout = async () => {
  await msalInstance.logoutPopup();
};