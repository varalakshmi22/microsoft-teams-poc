import { msalInstance } from "./authConfig";

const graphScopes = [
  "User.Read",
  "Calendars.Read",
  "Mail.Read",
];

export const login = async () => {
  let account = msalInstance.getActiveAccount();

  if (account) {
    return account;
  }
console.log("Before login");
console.log(Object.keys(localStorage));
console.log(Object.keys(sessionStorage));
  const response = await msalInstance.loginPopup({
    scopes: graphScopes,
    prompt: "select_account",
  });

  account = response.account!;

  msalInstance.setActiveAccount(account);

  console.log("LOGIN SUCCESS");
  console.log("ACCOUNT:", account);

  return account;
};

export const getGraphAccessToken = async () => {
  let account = msalInstance.getActiveAccount();

  console.log("Active Account:", account);

  // Restore account after page refresh
  if (!account) {
    const accounts = msalInstance.getAllAccounts();

    console.log("All Accounts:", accounts);

    if (accounts.length > 0) {
      account = accounts[0];

      msalInstance.setActiveAccount(account);
    }
  }

  if (!account) {
    throw new Error(
      "No account found. Please login first."
    );
  }

  const tokenResponse =
    await msalInstance.acquireTokenSilent({
      account,
      scopes: graphScopes,
    });

  console.log("TOKEN RESPONSE");
  console.log(tokenResponse);

  return tokenResponse.accessToken;
};

export const logout = async () => {
  await msalInstance.logoutPopup();
};