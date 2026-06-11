import { getGraphAccessToken } from "../auth/authService";

export const getCalendarEvents = async () => {
  const token = await getGraphAccessToken();

  const response = await fetch(
    "https://graph.microsoft.com/v1.0/me/events?$top=10",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
};