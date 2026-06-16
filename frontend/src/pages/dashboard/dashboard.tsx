import { useState } from "react";
import { authentication } from "@microsoft/teams-js";
import UserProfile from "../../components/UserProfile";
import Emails from "../../components/Emails";
import CalendarEvents from "../../components/CalenderEvents";
import SsoStatus from "../../components/SsoStatus";
import { getCalendarEvents, getEmails, getProfile } from "../../api/graphApi";


const Dashboard = () => {
    const [profile, setProfile] = useState<any>();
    const [events, setEvents] = useState<any[]>([]);
    const [emails, setEmails] = useState<any[]>([]);


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
            console.log("Load button clicked");

            const profileData =
                await getProfile();
            console.log("Profile data:", profileData);
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
                profile={profile}
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