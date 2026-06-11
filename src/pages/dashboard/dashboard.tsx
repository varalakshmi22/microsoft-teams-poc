import { useState } from "react";
import { authentication } from "@microsoft/teams-js";
import UserProfile from "../../components/UserProfile";
import { useTeamsContext } from "../../hooks/useTeamsContext";
import Emails from "../../components/Emails";
import CalendarEvents from "../../components/CalenderEvents";
import SsoStatus from "../../components/SsoStatus";




const Dashboard = () => {
  const { context } =
    useTeamsContext();

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
  

  return (
    <>
      <UserProfile
        context={context}
      />

      <SsoStatus
        token={token}
        onGetToken={getSsoToken}
      />

      <CalendarEvents />

      <Emails />
    </>
  );
};

export default Dashboard;