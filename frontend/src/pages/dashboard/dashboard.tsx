import { useState } from "react";
import UserProfile from "../../components/UserProfile";
import Emails from "../../components/Emails";
import CalendarEvents from "../../components/CalenderEvents";
import { getCalendarEvents, getEmails, getProfile } from "../../api/graphApi";
import Button from "@mui/material/Button";


const Dashboard = () => {
    const [profile, setProfile] = useState<any>();
    const [events, setEvents] = useState<any[]>([]);
    const [emails, setEmails] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const loadGraphData = async () => {
        try {
            console.log("Load button clicked");
            setLoading(true);

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
        } finally {
            setLoading(false);
        }
    };
    console.log("profile in Dashboard:", profile);
    return (
        <>
            <UserProfile
                profile={profile}
            />
            {/* <Button variant="contained"
                loading={loading}
                onClick={loadGraphData}
                disabled={loading}>
                {loading ? "Loading..." : "Load Graph Data"}
            </Button> */}
            <CalendarEvents events={events} />
            <Emails emails={emails} />
        </>
    );
};

export default Dashboard;