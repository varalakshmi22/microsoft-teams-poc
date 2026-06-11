import { useState } from "react";
import { authentication } from "@microsoft/teams-js";
import UserProfile from "../../components/UserProfile";
import Emails from "../../components/Emails";
import CalendarEvents from "../../components/CalenderEvents";
import SsoStatus from "../../components/SsoStatus";
import { getCalendarEvents, getEmails, getProfile } from "../../auth/graphService";
import { useTeamsContext } from "../../hooks/useTeamsContext";
import { login } from "../../auth/authService";


const Dashboard = () => {
    const [profile, setProfile] = useState<any>();
    const [events, setEvents] = useState<any[]>([]);
    const [emails, setEmails] = useState<any[]>([]);

    const { context } = useTeamsContext();

    const [token, setToken] =
        useState("");


    const getSsoToken = async () => {
        try {
            const token =
                await authentication.getAuthToken();

            setToken(token);
            console.log("SSO Token:", token);
        } catch (error) {
            console.error(error);
        }
    };
    const loadGraphData = async () => {
        try {
            await login();

            const profileData =
                await getProfile();

            const eventData =
                await getCalendarEvents();

            const emailData =
                await getEmails();

            setProfile(profileData);
            setEvents(eventData.value || []);
            setEmails(emailData.value || []);
        } catch (error) {
            console.error(error);
        }
    };
    console.log("profile in Dashboard:", profile);
    return (
        <>
            <UserProfile
                context={context}
            />

            <SsoStatus
                token={token}
                onGetToken={getSsoToken}
            />

            <CalendarEvents events={events} />

            <Emails emails={emails} />


            <button onClick={loadGraphData}>
                Load Outlook Data
            </button>
        </>
    );
};

export default Dashboard;