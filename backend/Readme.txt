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





