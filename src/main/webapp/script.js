// Restruant Information Edit Button
let resButton = document.getElementById("restruantEdit");

resButton.addEventListener("click", function() {
    // your code here...
  window.location.replace("resturant.html");
})



// insert value to restruantName

let restruantName = document.getElementById("restruantName");
restruantName.innerHTML = "Paragraph changed!";


// Menu Add Button

let AddButton = document.getElementById("addButton");
AddButton.addEventListener("click", function() {
    // your code here...
  window.location.replace("menu.html");
});


// Menu Flow

// Async get function to get the real data 

let returnData = [];

// Server Response "/menuItems"
async function getMenuItems() {

    // send get request 
    let responseFromServer = await fetch('/menuItems');
    if (responseFromServer.ok) {
        // return the array on success
      const JsonArray = await  responseFromServer.json();
      return JsonArray;
    } else {
      throw Error(responseFromServer.status);
    }
  
  }


// returnedArray from serverlet: ["001","Spegatti",12, "002", "Pasta",  13, "003", "Fettuccine ", 14,"004", "Coke", 3];

async function setUpMenuItems(){
    // calling getMemuItems function to fetch the server, then return the data from the server 
    const returnedArray = await getMenuItems();
    console.log(returnedArray);
    let dataLenghth = returnedArray.length;

    let id = 0,itemName = 0,price = 0;
    for (let i = 0; i < dataLenghth; i+=3) {
    // set itemName and price
    itemID = returnedArray[i];
    itemName = returnedArray[i+1];
    price = returnedArray[i+2];
    // append the created block to menu 
    document.getElementById('menuBoxContainer').appendChild(newBlock(itemID,itemName,price));
    }
}


// Reseting the webpage everytime the page gets loaded
window.onload = function() {
    setUpMenuItems();
}




//function that creates the child element 

// add <div> for it 
function newBlock(itemID,itemName,price){
  let div = document.createElement('div');
  div.innerHTML = `
    <div class="pinkBox">
        <div class="boxText">
          <div id="itemID">${itemID} </div>
          
          <div class="child">${itemName}</div>
          <div class="child">$${price}</div>
        </div>
        <div class="boxButton">
            <button class="editButton">Edit</button>
        </div>
    </div>
`;
  return div
}