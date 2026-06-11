import { useEffect } from "react";
import { useEmails } from "../hooks/useEmails";
import Card from "./Cards";

const Emails = () => {
  const {
    emails,
    loadEmails,
    loading,
  } = useEmails();

  useEffect(() => {
    loadEmails();
  }, []);

  return (
    <Card
     title="Recent Emails">
      {loading && <p>Loading...</p>}

      {emails.map((mail) => (
        <div
          key={mail.id}
          style={{
            marginBottom: 12,
          }}
        >
          <strong>
            {mail.subject}
          </strong>

          <div>
            {
              mail.from
                ?.emailAddress
                ?.address
            }
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Emails;