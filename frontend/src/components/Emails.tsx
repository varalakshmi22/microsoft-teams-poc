import {
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
} from "@mui/material";

type Props = {
  emails: any[];
};

const Emails = ({ emails }: Props) => {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
        >
          Recent Emails
        </Typography>

        {emails.length === 0 ? (
          <Typography color="text.secondary">
            No emails found
          </Typography>
        ) : (
          <List>
            {emails.map((mail, index) => (
              <div key={mail.id}>
                <ListItem
                  sx={{
                    display: "block",
                    px: 0,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                  >
                    {mail.subject ||
                      "(No Subject)"}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    From:{" "}
                    {
                      mail.from
                        ?.emailAddress
                        ?.name
                    }
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {new Date(
                      mail.receivedDateTime
                    ).toLocaleString()}
                  </Typography>
                </ListItem>

                {index <
                  emails.length - 1 && (
                  <Divider />
                )}
              </div>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
};

export default Emails;