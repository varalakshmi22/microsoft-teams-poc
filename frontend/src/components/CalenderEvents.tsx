import {
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
} from "@mui/material";

type Props = {
  events: any[];
};

const CalendarEvents = ({
  events,
}: Props) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
        >
          Upcoming Events
        </Typography>

        {events.length === 0 ? (
          <Typography color="text.secondary">
            No upcoming events
          </Typography>
        ) : (
          <List>
            {events.map(
              (event, index) => (
                <div key={event.id}>
                  <ListItem
                    sx={{
                      display: "block",
                      px: 0,
                    }}
                  >
                    <Typography
                    variant="subtitle1"
                    >
                      {event.subject}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Start:{" "}
                      {new Date(
                        event.start
                          ?.dateTime
                      ).toLocaleString()}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      End:{" "}
                      {new Date(
                        event.end
                          ?.dateTime
                      ).toLocaleString()}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Location:{" "}
                      {event.location
                        ?.displayName ||
                        "N/A"}
                    </Typography>
                  </ListItem>

                  {index <
                    events.length -
                      1 && (
                    <Divider />
                  )}
                </div>
              )
            )}
          </List>
        )}
      </CardContent>
    </Card>
  );
};

export default CalendarEvents;