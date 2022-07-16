
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

// append the id session send to doPost 

// in do post, if id is not null, then update entry


// If the item id exist, replace the form submit button with a new Update button outside the form. 
if (ID) {
    //remove the form submit button
    let confirm = document.getElementById("menuSubmit");
    confirm.remove();
    // append another in the form
    let div = document.createElement('div');
    div.setAttribute("class", "boxButton");
    div.innerHTML = `<button class="submitButton" id = "updateButton">Update</button>`;
    document.getElementById('subBox').appendChild(div);
    // call a function to add event listener to 
    updateButtonEventListener();
    
  }

  
  // event listener function 
  function updateButtonEventListener(){
    let updateButton = document.getElementById("updateButton");
    updateButton.addEventListener("click",function() {
      // new object that contains item id,updated item name and item price
      let obj = {itemID:ID, itemName: menuItemName.value, itemPrice: menuItemPrice.value};
      console.log(obj);
  });
  }
    
  