// Restruant Information Edit Button

let resButton = document.getElementById("restruantEdit");

resButton.addEventListener("click", function() {
    // your code here...
  window.location.replace("resturant.html");
});

// insert value to restruantName

let restruantName = document.getElementById("restruantName");

restruantName.innerHTML = "Paragraph changed!";


// Menu Add Button

let AddButton = document.getElementById("addButton");

AddButton.addEventListener("click", function() {
    // your code here...
  window.location.replace("menu.html");
});
