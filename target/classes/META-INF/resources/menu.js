
// Parse data from parameter URl
const urlParams = new URLSearchParams(window.location.search);
const ID = parseInt(urlParams.get('itemID')); 
const Name = urlParams.get('itemName'); 
const Price = urlParams.get('itemPrice'); 

// Display in the input boxes
let menuItemName = document.getElementById("menuItemName");
menuItemName.value = Name;
let menuItemPrice = document.getElementById("menuItemPrice");
menuItemPrice.value = Price;

// append the id session send to doPost 

// in do post, if id is not null, then update entry



// Try appending a transparent input in the form

if (ID) {
    //Change button name from Confirm to Update
    let confirm = document.getElementById("menuSubmit");
    confirm.value = "Update";
    // Prepend the item ID inputbox as read only so that the user can't edit it
    let div = document.createElement('div');
    div.setAttribute("class", "entryRow");
    div.innerHTML = `   
                        <label>Item ID: </label>
                        <input type="text" id = "IDinput" name="itemID" value=${ID} readonly>
                    `;
    document.getElementById('MenuForm').prepend(div);
    
  }





  