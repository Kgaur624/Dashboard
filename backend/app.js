const express = require("express");
const fetchData = require("./routes/fetchJiraData");
const PORT = process.env.PORT || 4001;
const app = express();

app.get("/getData", (req, res) =>  {
  const url = "https://jira.dev.lithium.com/rest/api/2/search";
        fetchData.fetchJira(url).then(response => {
            //res.status().send(200); 
            res.send(response.data);
           // res.json(response); 
        });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
