import { useState } from "react";
import { getEmails } from "../services/emailService";

export const useEmails = () => {
  const [emails, setEmails] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadEmails = async () => {
    try {
      setLoading(true);

      const data = await getEmails();

      setEmails(data.value || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    emails,
    loading,
    loadEmails,
  };
};