// Restruant Information Edit Button
let resButton = document.getElementById("restruantEdit");

resButton.addEventListener("click", function() {
    // your code here...
  window.location.replace("");
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


// using fake data for now

let fakeData = ["Spegatti",12, "Pasta", 13, "Fettuccine ", 14];

let dataLenghth = fakeData.length;

let id = 0,itemName = 0,price = 0;



for (let i = 0; i < dataLenghth; i+=2) {
  // set itemName and price
  itemName = fakeData[i];
  price = fakeData[i+1];
  // append the created block to menu 
  document.getElementById('menuBoxContainer').appendChild(newBlock(itemName,price));
}


//function that creates the child element 
function newBlock(itemName,price){
  let div = document.createElement('div');
  div.innerHTML = `
    <div class="pinkBox">
        <div class="boxText">
          <div id="itemID">Item ID </div>
          <div class="child">${itemName}</div>
          <div class="child">${price}</div>
        </div>
        <div class="boxButton">
            <button class="editButton">Edit</button>
        </div>
    </div>
`;
  return div
}

