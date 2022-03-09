const axios = require("axios");
 async function fetchJira(URL) {
  try {
    const response = await axios.get(
     // "https://jira.dev.lithium.com/rest/api/2/search"
     URL,
      {
        params: {
          headers: {
            Authorization:
           'Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA==',
          },
        },
      }
    );
  
    return response;
  } catch (error) {
    return error;
  }
}

module.exports = {fetchJira} ;
