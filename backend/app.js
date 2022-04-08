const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 4001;
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/getData", fetchLIAData);
async function fetchLIAData(req, res) {
  const result = await axios.get(
    "https://jira.dev.lithium.com/rest/api/2/search?jql=Project%20in%20(LIA,%20%22Personalization%20Platform%22,%20BatApps)%20AND%20fixVersion%20=%2022.4%20AND%20status%20not%20in%20(Closed,%20Done)%20AND%20filter%20!=%20%22Aurora%20ALL%20components%22%20ORDER%20BY%20cf[12561]%20ASC",
    //"https://jira.dev.lithium.com/rest/api/2/search?jql=Project%20in%20(LIA,%20%22Personalization%20Platform%22,%20BatApps)%20AND%20fixVersion%20=%2022.3%20AND%20filter%20!=%20%22Aurora%20ALL%20components%22%20ORDER%20BY%20cf[12561]%20ASC",

    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Basic a2FydGlrLmdvdXI6S2hvcm9zLWtnMjQj",
      },
    }
  );
  console.log("response received");
  return res.send(result.data);
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
