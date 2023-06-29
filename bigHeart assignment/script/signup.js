
let checkpasswordsec = document.getElementById('Confirmpass');
let passwordsec = document.getElementById('pass');


checkpasswordsec.addEventListener('input', function() {
  var inputValue = checkpasswordsec.value;
  
  if (isValidInput(inputValue,passwordsec)) {
    checkpasswordsec.classList.remove('invalid-input');
    checkpasswordsec.classList.add('valid-input');
  } else {
    checkpasswordsec.classList.remove('valid-input');
    checkpasswordsec.classList.add('invalid-input');
  }

});

function isValidInput(inputValue,passwordsec) {
  
  return inputValue == passwordsec.value; 
  console.log(passwordsec);
}




let admin = JSON.parse(localStorage.getItem("Admin")) || [];

class User{
    #password;
    constructor(n,e,p,pho,add){
        this.name = n;
        this.email = e;
        this.password = p;
        this.number = pho;
        this.address = add;

    }

    Signup(n,e,p,pho,add){
        
        let isValidated = false;
        isValidated = this.#validateUsername(n)&& this.#validateEmail(e) && this.#validatePassword(p) && this.#validateNumber(pho) && this.#validateAddress(add);
        if(isValidated){
            this.name = n;
            this.email = e;
            this.password = p; 
            this.number = pho;
            this.address = add;
        
            admin.push(this);
            localStorage.setItem("Admin",JSON.stringify(admin));
            alert("Sign Up Sucessful");
            location.href = "login.html"
        }else{
            let a = this.#validateUsername(n);
            let b = this.#validateEmail(e);
            let c = this.#validatePassword(p);
            let d = this.#validateNumber(pho);
            let em = this.#validateAddress(add);

            if(!a){
                alert ("Invalid Username or Username should be between 3 and 20 characters long.");
            }else if(!b){
                alert ("Your password must include atleast 8 characters or Invalid Email ");
            }else if(!c){
                alert ("Your password must include atleast 8 characters or Invalid password ");
            }else if(!d){
                alert ("Invalid PhoneNumber or number should of length 10 ");
            }else if(!em){
                alert ("Invalid Address or Address should not exceed 100 characters.");
            }
        }
    }

    #validateUsername(username){
        var minLength = 3; // Minimum required username length
        var maxLength = 20; // Maximum allowed username length
      
        if (username.length < minLength || username.length > maxLength) {
          return false;
        }else{
            return true;
        }
    }

    #validateEmail(email){
        // check email
        return true;
    }

    #validatePassword(password){
        // check pass 
        if(password.length < 8) {
            return false;
        }else{
            return true;
        }
        
    }

    #validateNumber(phone){
        // check pass 
        if(phone.length==10){
            return true;
        }else{
            return false;
        }
        
    }

    #validateAddress(address){
        var maxLength = 100; // Maximum allowed address length
       
        if (address.length > maxLength) {
          return false;
        }else{
            return true;
        }
    }

}

let data;

// start sign up 

let signup = ()=>{
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let number = document.getElementById("contact").value;
    let address = document.getElementById("address").value;
    console.log("hello")

    data = new User(name,email,password,number,address);

    data.Signup(name,email,password,number,address);
}



