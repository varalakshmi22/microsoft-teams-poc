import Card from "./Cards";

type Props = {
  emails: any;
};
const Emails = ({emails}: Props) => {
//   const {
//     emails,
//     loadEmails,
//     loading,
//   } = useEmails();

//   useEffect(() => {
//     loadEmails();
//   }, []);

  return (
    <Card
     title="Recent Emails">
      {/* {loading && <p>Loading...</p>} */}

      {emails.map((mail:any) => (
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