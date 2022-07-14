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


// using fake data for now

let fakeData = ["001","Spegatti",12, "002", "Pasta",  13, "003", "Fettuccine ", 14,"004", "Coke", 3];

let dataLenghth = fakeData.length;

let id = 0,itemName = 0,price = 0;

        // change forloop to everytime page gets load

for (let i = 0; i < dataLenghth; i+=3) {
  // set itemName and price
  itemID = fakeData[i];
  itemName = fakeData[i+1];
  price = fakeData[i+2];
  // append the created block to menu 
  document.getElementById('menuBoxContainer').appendChild(newBlock(itemID,itemName,price));
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