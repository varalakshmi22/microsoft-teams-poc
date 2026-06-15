import { useState } from "react";
import { getCalendarEvents } from "../services/calenderService";

export const useCalendar = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadEvents = async () => {
    try {
      setLoading(true);

      const data = await getCalendarEvents();

      setEvents(data.value || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    events,
    loading,
    loadEvents,
  };
};