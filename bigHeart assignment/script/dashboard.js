let admin = JSON.parse(localStorage.getItem("Admin")) || [];
console.log(admin);

let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let password = document.getElementById('password');

if(admin.length==0){
    console.log("no data is there");
}else{
    username.innerHTML= `Username:` +"  "+ admin[admin.length-1].name;

    email.innerHTML= `Email Id:` +"  "+ admin[admin.length-1].email;

    phone.innerHTML= `Phone Number:` +"  "+ admin[admin.length-1].number;

    address.innerHTML= `Address:` +"  "+ admin[admin.length-1].address;
}

    let currentPassword = admin[admin.length-1].password;

    let usernamebutton = document.createElement('button');
        usernamebutton.textContent = 'Name Update';
        usernamebutton.style.backgroundColor = 'blue';
        usernamebutton.style.color = 'white';
        usernamebutton.style.padding = '10px';
        usernamebutton.style.margin = '10px';
        usernamebutton.style.borderRadius = '10px';
        usernamebutton.style.cursor = 'pointer';
        usernamebutton.id = 'usernamebutton';

        let phonebutton = document.createElement('button');
        phonebutton.textContent = 'Number Update';
        phonebutton.style.backgroundColor = 'blue';
        phonebutton.style.color = 'white';
        phonebutton.style.padding = '10px';
        phonebutton.style.margin = '10px';
        phonebutton.style.borderRadius = '10px';
        phonebutton.style.cursor = 'pointer';
        phonebutton.id = 'phonebutton';


        let addressbutton = document.createElement('button');
        addressbutton.textContent = 'Address Update';
        addressbutton.style.backgroundColor = 'blue';
        addressbutton.style.color = 'white';
        addressbutton.style.padding = '10px';
        addressbutton.style.margin = '10px';
        addressbutton.style.borderRadius = '10px';
        addressbutton.style.cursor = 'pointer';
        addressbutton.id = 'addressbutton';

        let passwordbutton = document.createElement('button');
            passwordbutton.textContent = 'Password Update';
            passwordbutton.style.backgroundColor = 'blue';
            passwordbutton.style.color = 'white';
            passwordbutton.style.padding = '10px';
            passwordbutton.style.margin = '10px';
            passwordbutton.style.borderRadius = '10px';
            passwordbutton.style.cursor = 'pointer';
            passwordbutton.id = 'passwordbutton';

        

    



    username.appendChild(usernamebutton);
    phone.appendChild(phonebutton);
    address.appendChild(addressbutton);
    password.appendChild(passwordbutton);

    
    let overlay = document.getElementById('overlay');
    let newValueInput = document.getElementById('newValue');
    let confirmButton = document.getElementById('confirmButton');
    let cancelButton = document.getElementById('cancelButton');

      let clickedButtonId='usernamebutton';

      function showPopup() {
        overlay.classList.add('visible');
      }


      usernamebutton.addEventListener('click', function(event){
        clickedButtonId = event.target.id;
        showPopup();
      });
      phonebutton.addEventListener('click', function(event){
        clickedButtonId = event.target.id;
        showPopup();
      });
      addressbutton.addEventListener('click', function(event){
        clickedButtonId = event.target.id;
        showPopup();
      });
      passwordbutton.addEventListener('click', function(event){
        clickedButtonId = event.target.id;
        showPopup();
      });

      let updatedUsername = admin[admin.length-1].name;
      let updatedNumber = admin[admin.length-1].number;
      let updatedAddress =admin[admin.length-1].address;

      function updateValue(newValue) {
        // localStorage.setItem('value', newValue);
        if(clickedButtonId=='usernamebutton'){
            username.innerHTML= `Username:` +"  "+ newValue;
            updatedUsername = newValue;
           
        }else if(clickedButtonId=='phonebutton'){
        phone.innerHTML= `Phone Number:` +"  "+ newValue;
        updatedNumber = newValue;
        }else if(clickedButtonId=='addressbutton'){
        address.innerHTML= `Address:` +"  "+ newValue;
        updatedAddress =newValue;
        }else{
        currentPassword= newValue;
        }
        }


      function hidePopup() {
        overlay.classList.remove('visible');
        newValueInput.value = '';
      }


     confirmButton.addEventListener('click', function() {
        let newValue = newValueInput.value;
        if (newValue.length==0) {
          alert("input field is required");
        }else{
            
            updateValue(newValue);
            admin[admin.length - 1].name = updatedUsername;
            admin[admin.length - 1].number =updatedNumber;
            admin[admin.length - 1].address = updatedAddress;
            admin[admin.length - 1].password= currentPassword;
            localStorage.setItem('Admin', JSON.stringify(admin));
            hidePopup();
            
        }
        
      });

     cancelButton.addEventListener('click', hidePopup);



