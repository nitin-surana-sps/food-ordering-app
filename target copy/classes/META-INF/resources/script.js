// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */

const title = document.getElementById("caption");
const text = "//Aspiring Software Engineer...      ";

let index = 0;

const randomSpeed = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const play = () => {
  title.innerHTML = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }

  clearInterval(timer);
  timer = setInterval(play, randomSpeed(50, 300));
};

let timer = setInterval(play, 300);


// Server Response "/hello"
async function addRandomGreeting() {
    
    // send get request 
    let responseFromServer = await fetch('/hello');
    if (responseFromServer.ok) {

      // pick a greeting randomly
      const JsonArray = await  responseFromServer.json();
      const greeting = JsonArray[Math.floor(Math.random() * JsonArray.length)];
      
      // Add it to the page.
      const greetingContainer = document.getElementById('greeting-container');
      greetingContainer.innerText = greeting;
    } else {
      throw Error(responseFromServer.status);
    }
  
  }

   
  let inputText = document.getElementById("inputValue").value;
  
  console.log("inputValue: ",inputValue);


//   // Submit Button
//   async function submitText() {
//     const responseFromServer = await sendPostRequest("/form-handler",inputText);
//     // const textFromResponse = await responseFromServer.text();
//     console.log("textFromResponse:", responseFromServer);
    
//   }
  
//   async function sendPostRequest(url,data) {
//     params = {
//       method: 'POST', 
//       headers: {'Content-Type': 'application/text'},
//       body: data };
//       console.log("about to send post request");
//       console.log(data);
//     let response = await fetch(url,params);
//     if (response.ok) {
//       let data = await response.text();
//       return data;
//     } else {
//       throw Error(response.status);
//     }
//   }