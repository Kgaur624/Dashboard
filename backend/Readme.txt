const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express()
 const { getPosts } = require("./routes/post")

app.get('https://jira.dev.lithium.com/rest/api/2/search', getPosts)

app.listen(3002);


--------------------------------------
import fetch from "node-fetch";
var username = '@khoros.com';
var password =  'Khoros@321';
// fetch("https://jira.dev.lithium.com/rest/api/2/search")
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err));




(async () => {
    await fetch("https://jira.dev.lithium.com/rest/api/2/search")
        .then((response) => response.json())
        .then((data) => console.log(data))
})();


===================================================================

//var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

// fetch("https://jira.dev.lithium.com/rest/api/2/search")
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err));





a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA==

"Authorization": "Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA=="






 //import fetch from "node-fetch";
// var username = "kartik.gour@khoros.com";
// var password = "16051999KG!(((";
// (async () => {
//   await fetch("https://jira.dev.lithium.com/rest/api/2/search", {
//     headers: {
//       
//         'Authorization': 'Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA=='
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// })();





// async function getData() {
//     const resp = await fetch("https://jira.dev.lithium.com/rest/api/2/search", {

//         headers: {
//             'Authorization': 'Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA=='
//         },
//     });
//     let response = await resp.json();
//     console.log(response);
// }

// getData();

import { createRequire } from "module";
const require = createRequire(import.meta.url)
const http = require("https");
//const data = JSON.stringify;
var username = "kartik.gour@khoros.com";
var password = "16051999KG!(((";
var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
var options = {
   // protocol:'https:',
    method:'GET',
   // data: JSON.stringify(data),
    headers :{
        'Authorization': 'Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA==',
       'Content-Type': 'application/json; charset=utf-8'
    } };
http.get("https://jira.dev.lithium.com/rest/api/2/search", options, res =>{
    let data ="";
    res.on("data",chunk =>{
        data+=chunk;
    });
    res.on("end",()=>{
        let url = JSON.parse(data);
        console.log(url);
    }); })
.on("error",e =>{
    console.log('Error:'+e.message);
})



// import { createRequire } from "module";
// const require = createRequire(import.meta.url)
// const axios = require('axios');
// async function getUser() {
//     try {
//       const response = await axios.get("https://jira.dev.lithium.com/rest/api/2/search",{ params: {

//         headers: {
//             'Authorization': 'Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA=='
//           }}
//           );
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   getUser();


------------------updated----------------------------


 //import fetch from "node-fetch";
// (async () => {
//   await fetch("https://jira.dev.lithium.com/rest/api/2/search", {
//     headers: {
      
//         'Authorization': 'Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA=='
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// })();


// async function getData() {
//     const resp = await fetch("https://jira.dev.lithium.com/rest/api/2/search", {

//         headers: {
//             'Authorization': 'Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA=='
//         },
//     });
//     let response = await resp.json();
//     console.log(response);
// }


// var responseClone; 
// async function getData() {
//     const resp = await fetch("https://jira.dev.lithium.com/rest/api/2/search", {
//         headers: {
//             'Authorization': 'Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA=='
//         },
//     })
//     .then(function (response) {
//         responseClone = response.clone();
//         return response.json();
//     })
//     .then(function (resp) {
//    console.log(resp);
//     }, function (rejectionReason) { 
//         console.log('Error parsing JSON from response:', rejectionReason, responseClone); 
//         responseClone.text() 
//         .then(function (bodyText) {
//             console.log('Received the following instead of valid JSON:', bodyText); 
//         });
//     });
// }

// getData();




import { createRequire } from "module";
const require = createRequire(import.meta.url)
const http = require("https");
var options = {
    method:'GET',
    headers :{
        'Authorization': 'Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA==',
       'Content-Type': 'application/json; charset=utf-8'
    } };
http.get("https://jira.dev.lithium.com/rest/api/2/search", options, res =>{
    let data ="";
    res.on("data",chunk =>{
        data+=chunk;
    });
    res.on("end",()=>{
        let url = JSON.parse(data);
        console.log(url);
    }); })
.on("error",e =>{
    console.log('Error:'+e.message);
})



// import { createRequire } from "module";
// const require = createRequire(import.meta.url)
// const axios = require('axios');
// async function getUser() {
//     try {
//       const response = await axios.get("https://jira.dev.lithium.com/rest/api/2/search",{ params: {

//         headers: {
//             'Authorization': 'Basic a2FydGlrLmdvdXJAa2hvcm9zLmNvbToxNjA1MTk5OUtHISgoKA=='
//           }}}
//           );
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   getUser();




const url = "https://jira.dev.lithium.com/rest/api/2/search";
   res = fetchData.fetchJira(url);
  //   res.redirect(fetchJira(passedVariable) 
  // ).then((res) => {
     console.log(res);
     console.log("hello");
     
  // });
  // console.log(response);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


https://jira.dev.lithium.com/rest/api/2/search 
https://jira.dev.lithium.com/rest/api/3/filter
https://jira.dev.lithium.com/browse/LIA-79176
Project in (LIA, "Personalization Platform", BatApps) AND fixVersion = 22.3 AND status not in (Closed, Done) AND (labels is EMPTY OR labels != aurora-fix-version) ORDER BY cf[12561] ASC



https://jira.dev.lithium.com/browse/LIA-80329?jql=Project%20in%20(LIA%2C%20%22Personalization%20Platform%22%2C%20BatApps)%20AND%20fixVersion%20%3D%2022.3%20AND%20status%20not%20in%20(Closed%2C%20Done)%20AND%20(labels%20is%20EMPTY%20OR%20labels%20!%3D%20aurora-fix-version)%20ORDER%20BY%20cf%5B12561%5D%20ASC


  const url = 'https://jira.dev.lithium.com/rest/api/2/search?jql=project=LIA';
  `https://jira.dev.lithium.com/rest/api/2/search?jql=${jql}`;

Request failed with status code 400 means that request was created, but server returned response with HTTP code 400 (Bad Request).


const axios = require("axios");
 async function fetchJira(URL) {
  var username = "kartik.gour";
  var password = "Kg3059011999";
  var auth = "Basic " + Buffer.from(username + ":" + password).toString("base64");
  try {
    const response = await axios.get(
     // "https://jira.dev.lithium.com/rest/api/2/search"
     URL,
      {
        params: {
          headers: { "Content-Type": "application/json",
          Authorization: auth },
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
}



//const axios = require("axios");
const fetch = require('node-fetch'); 
async function fetchJira(URL) {
  var username = "kartik.gour";
  var password = "Kg3059011999";
  var auth = "Basic " + Buffer.from(username + ":" + password).toString("base64");
  try {
    const response = await fetch(
     // "https://jira.dev.lithium.com/rest/api/2/search"
     URL,
      {
        params: {
          headers: { "Content-Type": "application/json",
          Authorization: auth },
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
}

module.exports = {fetchJira} ;



curl -i -u kartik.gour:Kg3059011999  -H "Content-Type: application/json" -H "Accept: application/json" -X GET "https://jira.dev.lithium.com/rest/api/2/search?jql=Project in (LIA, "Personalization Platform", BatApps) AND fixVersion = 22.3 AND status not in (Closed, Done) AND filter != "Aurora ALL components" ORDER BY cf[12561] ASC"




const express = require("express");
const fetchData = require("./routes/fetchJiraData");
const PORT = process.env.PORT || 4001;
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/getData", fetchLIAData);

async function fetchLIAData(request, res){
  const jql = encodeURIComponent('Project in (LIA, "Personalization Platform", BatApps) AND fixVersion = 22.3 AND status not in (Closed, Done) AND (labels is EMPTY OR labels != aurora-fix-version) ORDER BY cf[12561] ASC')
  const url = `https://jira.dev.lithium.com/rest/api/2/search?jql=${jql}`;
  const response = await fetchData.fetchJira(url);
  res.status(200).send(response);
  console.log(url);
  //console.log(result);
}
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});




=================================== main code =====================================
const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 4001;
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/getData", fetchLIAData);

async function fetchLIAData(request, res)
{
  const result = await axios.get(
    "https://jira.dev.lithium.com/rest/api/2/search?jql=Project%20in%20(LIA,%20%22Personalization%20Platform%22,%20BatApps)%20AND%20fixVersion%20=%2022.3%20AND%20status%20not%20in%20(Closed,%20Done)%20AND%20filter%20!=%20%22Aurora%20ALL%20components%22%20ORDER%20BY%20cf[12561]%20ASC",
     {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       "Accept":"application/json",
        Authorization: "Basic a2FydGlrLmdvdXI6S2czMDU5MDExOTk5",
      }
    }
  );
  console.log(result.data);
  return res.send(result.data);
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
**********************************Important*****************************************************
// const stateIndex =
                  //   item.fields.customfield_17660.indexOf("state=");
                  // const nextStateIndex = stateIndex + 7;
                  // const Develop = item.fields.customfield_17660.substring(
                  //   nextStateIndex,
                  //   item.fields.customfield_17660.indexOf(", ") - 1
                  // );
