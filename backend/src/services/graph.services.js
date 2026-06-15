const axios = require("axios");

const {
  getGraphToken,
} = require("./obo.services");

exports.getProfile =
  async (req, res) => {
    try {

      const graphToken =
        await getGraphToken(
          req.body.token
        );

      const profile =
        await axios.get(
          "https://graph.microsoft.com/v1.0/me",
          {
            headers: {
              Authorization:
                `Bearer ${graphToken}`,
            },
          }
        );

      res.json(profile.data);

    } catch (error) {
      console.error(error);

      res.status(500).json(error.response?.data || error);
    }
  };

exports.getEvents =
  async (req, res) => {
    try {

      const graphToken =
        await getGraphToken(
          req.body.token
        );

      const events =
        await axios.get(
          "https://graph.microsoft.com/v1.0/me/events?$top=10",
          {
            headers: {
              Authorization:
                `Bearer ${graphToken}`,
            },
          }
        );

      res.json(events.data);

    } catch (error) {
      res.status(500).json(error.response?.data || error);
    }
  };

exports.getEmails =
  async (req, res) => {
    try {

      const graphToken =
        await getGraphToken(
          req.body.token
        );

      const emails =
        await axios.get(
          "https://graph.microsoft.com/v1.0/me/messages?$top=10",
          {
            headers: {
              Authorization:
                `Bearer ${graphToken}`,
            },
          }
        );

      res.json(emails.data);

    } catch (error) {
      res.status(500).json(error.response?.data || error);
    }
  };