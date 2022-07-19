// Parse data from parameter URl
var urlParams = new URLSearchParams(window.location.search);
var PhoneN = parseInt(urlParams.get('phoneNumber')); 
var Name1 = urlParams.get('restaurantName');
var Address = urlParams.get('restaurantAddress'); 

// Display in the input boxes
let restaurantInfoName = document.getElementById("restaurantInfoName");
restaurantInfoName.value = Name1;
let restaurantInfoAddress = document.getElementById("restaurantInfoAddress");
restaurantInfoAddress.value = Address;
let restaurantInfoPhone = document.getElementById("restaurantInfoPhone");
restaurantInfoPhone.value = PhoneN;

    //Change button name from Confirm to Update
    let confirm = document.getElementById("submitButton");
    confirm.addEventListener("click", function() {
        window.location.replace("index.html");
        
    });

    
