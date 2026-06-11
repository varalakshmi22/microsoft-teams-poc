import { getGraphAccessToken } from "../auth/authService";

export const getEmails = async () => {
  const token = await getGraphAccessToken();
  console.log("Token in email service:", token);

  const response = await fetch(
    "https://graph.microsoft.com/v1.0/me/messages?$top=10",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
console.log("Response status:", response);
  return response.json();
};