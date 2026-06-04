export const msalConfig = {
  auth: {
    clientId: "2abc845c-15fc-414f-b319-e7da37e9b563",
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