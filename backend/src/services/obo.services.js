const axios = require("axios");

exports.getGraphToken =
  async (teamsToken) => {

    const params =
      new URLSearchParams();

    params.append(
      "client_id",
      process.env.CLIENT_ID
    );

    params.append(
      "client_secret",
      process.env.CLIENT_SECRET
    );

    params.append(
      "grant_type",
      "urn:ietf:params:oauth:grant-type:jwt-bearer"
    );

    params.append(
      "requested_token_use",
      "on_behalf_of"
    );

    params.append(
      "assertion",
      teamsToken
    );

    params.append(
      "scope",
      "https://graph.microsoft.com/.default"
    );

    const response =
      await axios.post(
        `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
        params
      );

    return response.data.access_token;
  };