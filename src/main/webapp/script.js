// Restruant Information Edit Button
let resButton = document.getElementById("restruantEdit");
let restaurantID = 0;
let restaurantName = "Local Kitchens";
let restaurantAddress = "369 California Ave, Palo Alto, CA 94306";
let phoneNumber = "8553842868";
let restruantName = document.getElementById("restruantName");
let restruantAddress = document.getElementById("restruantAddress");
let restruantPhone = document.getElementById("restruantPhone");


resButton.addEventListener("click", function() {
    // your code here...
  window.location.replace("resturant.html");
})


// Menu Add Button

let AddButton = document.getElementById("addButton");
AddButton.addEventListener("click", function() {
    // your code here...
  window.location.replace("menu.html");
});





// Menu Flow

// Test ListTaskServlet


// async function test(){
//     let response = await fetch('/list-menuItems');
//     if(response.ok){
//         const JsonArray = await  response.json();
//         console.log(JsonArray);
//     }else {
//       throw Error(response.status);
//     }
// }

// test();



// Async get function to get the real data 

let returnData = [];

// Server Response "/menuItems"
async function getMenuItems() {

    // send get request 
    let responseFromServer = await fetch('/list-menuItems');
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
    let itemID = 0,itemName = 0,price = 0;

    for (let i = 0; i < dataLenghth; i+=3) {
        // set itemName and price
        itemID = returnedArray[i];
        itemName = returnedArray[i+1];
        price = returnedArray[i+2];
        // append the created block to menu 
        document.getElementById('menuBoxContainer').appendChild(newBlock(itemID,itemName,price));
    }
    
    // create an object to hold all the menut edit buttons
    let menuEdit = document.getElementsByClassName("menuEditButton");



    // call setEventListener
    setEvenListener(menuEdit,returnedArray,dataLenghth);
}



// Reseting the webpage everytime the page gets loaded
window.onload = function() {
    setUpMenuItems();
    setUpResInfo();

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
            <button class="menuDeleteButton">Delete</button>
            <button class="menuEditButton">Edit</button>
        </div>
    </div>
`;
  return div
}



// add event listener by a for loop 
function setEvenListener(menuEdit,Data,DataLength){

    DataLength /=3;
    for (let i = 0; i < DataLength; i++) {
        // pass event listener to all menu edit button
        let edit = menuEdit[i];
        edit.addEventListener("click", function(){
          console.log(Data[i*3]);
          console.log(Data[i*3+1]);
          console.log(Data[i*3+2]);
          
          // declare variables for url parameters 
          let id = Data[i*3];
          let name = Data[i*3+1];
          let price = Data[i*3+2];
          
          // url parameters
       
        let menuURL = `menu.html?itemID=${id}&itemName=${name}&itemPrice=${price}`;
        window.location.href = menuURL;
          
        })
      }
}

async function getRestaurantInfo() {

    // send get request 
    let responseFromServer = await fetch('/list-resInfo');
    if (responseFromServer.ok) {
        // return the local array on success
      const JsonArray2 = await responseFromServer.json();
      return JsonArray2;
    } else {
      throw Error(responseFromServer.status);
    }
  
  }

  async function setUpResInfo() {
    // calling getMemuItems function to fetch the server, then return the data from the server 
    const returnedArray2 = await getRestaurantInfo();
    console.log(returnedArray2);
    let dataLenghth = returnedArray2.length;

    for (let i = 0; i < dataLenghth; i+=4) {
        // set itemName and price
        restaurantName = returnedArray2[i];
        restaurantAddress = returnedArray2[i+1];
        phoneNumber = returnedArray2[i+2];
    }
    restruantName.innerHTML = restaurantName;
    restruantAddress.innerHTML = restaurantAddress;
    restruantPhone.innerHTML = phoneNumber;
}
// insert value to restruantName
//change restaurant info


