export const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    authority:
      "https://login.microsoftonline.com/0540b69a-7ff8-497e-a99c-045243c2b269",
    redirectUri: window.location.origin,
  },
};

export const loginRequest = {
  scopes: [
    "openid",
    "profile",
    "email",
    "User.Read",
    "Calendars.Read",
    "Mail.Read"
  ],
};