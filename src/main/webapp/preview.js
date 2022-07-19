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
}
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
              <button class="menuEditButton">Add</button>
          </div>
      </div>
  `;
    return div
  }
