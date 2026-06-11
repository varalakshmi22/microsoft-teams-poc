import { getGraphAccessToken } from "../auth/authService";

const GRAPH_BASE =
    "https://graph.microsoft.com/v1.0";

export const getProfile = async () => {
    const token =
        await getGraphAccessToken();
    console.log
    const response = await fetch(
        `${GRAPH_BASE}/me`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    console.log("Response status in getProfile:", response.status);

    return response.json();
};

export const getCalendarEvents =
    async () => {
        const token =
            await getGraphAccessToken();
        console.log("Token in getCalendarEvents:", token);
        const response = await fetch(
            `${GRAPH_BASE}/me/events?$top=10&$orderby=start/dateTime`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log("Response status in getCalendarEvents:", response);
        return response.json();
    };

export const getEmails = async () => {
    const token =
        await getGraphAccessToken();
    console.log("Response status in getEmails:", token);

    const response = await fetch(
        `${GRAPH_BASE}/me/messages?$top=10`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    console.log("Response status in getEmails:", response);
    return response.json();
};