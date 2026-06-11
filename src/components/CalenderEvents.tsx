import { useEffect } from "react";
import Card from "./Cards";
import { useCalendar } from "../hooks/useCalender";

const CalendarEvents = () => {
  const {
    events,
    loadEvents,
    loading,
  } = useCalendar();

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <Card title="Calendar Events">
      {loading && <p>Loading...</p>}

      {events.map((event) => (
        <div
          key={event.id}
          style={{
            marginBottom: 12,
          }}
        >
          <strong>
            {event.subject}
          </strong>

          <div>
            {
              event.start
                ?.dateTime
            }
          </div>
        </div>
      ))}
    </Card>
  );
};

export default CalendarEvents;