import Card from "./Cards";

type Props = {
  events: any;
};
const CalendarEvents = ({events}: Props) => {
    // const {
    //     events,
    //     loadEvents,
    //     loading,
    // } = useCalendar();

    // useEffect(() => {
    //     loadEvents();
    // }, []);

    return (
        <Card title="Upcoming Events">
            {events.map((event:any) => (
                <div
                    key={event.id}
                    style={{ marginBottom: 12 }}
                >
                    <strong>
                        {event.subject}
                    </strong>

                    <div>
                        {event.start?.dateTime}
                    </div>
                </div>
            ))}
        </Card>
    );
};

export default CalendarEvents;