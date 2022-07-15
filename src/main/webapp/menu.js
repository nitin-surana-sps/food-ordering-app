
// Parse data from parameter URl
const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get('itemID'); 
const Name = urlParams.get('itemName'); 
const Price = urlParams.get('itemPrice'); 

// Display in the input boxes
let menuItemName = document.getElementById("menuItemName");
menuItemName.value = Name;
let menuItemPrice = document.getElementById("menuItemPrice");
menuItemPrice.value = Price;