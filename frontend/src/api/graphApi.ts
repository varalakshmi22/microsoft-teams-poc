import {app, authentication } from "@microsoft/teams-js";

const getTeamsToken = async () => {
  await app.initialize();

    console.log("Getting Teams token...");
    const token = await authentication.getAuthToken();
    console.log("Token received");

    return token;
}
// const API_BASE = 'https://teams-poc-api.vercel.app/api';
const API_BASE = 'http://localhost:5000/api';
export const getProfile = async () => {
      console.log("getProfile started");
    const token =
        await getTeamsToken();
        console.log("About to call backend");

    const response = await fetch(
        `${API_BASE}/profile`,
        {
            method: 'POST',
            headers: {
                'Content-Type': `application/json`,
            },
            body: JSON.stringify({ token }),
        }
    );
   console.log("Backend responded");
    return response.json();
};

export const getCalendarEvents =
    async () => {
        const token =
            await getTeamsToken();
        console.log("Token in getCalendarEvents:", token);
        const response = await fetch(
            `${API_BASE}/events`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': `application/json`,
                },
                body: JSON.stringify({ token }),
            }
        );
        console.log("Response status in getEmails:", response);
        return response.json();
    };

export const getEmails = async () => {
    const token =
        await getTeamsToken();
    console.log("Response status in getEmails:", token);

    const response = await fetch(
        `${API_BASE}/emails`,
        {
            method: 'POST',
            headers: {
                'Content-Type': `application/json`,
            },
            body: JSON.stringify({ token }),
        }
    );
    console.log("Response status in getEmails:", response);
    return response.json();
};