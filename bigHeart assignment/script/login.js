let admin = JSON.parse(localStorage.getItem("Admin")) || [];


class User{
    #password;
    constructor(email,password){
      
        this.email = email;
        this.password = password;
       
    }


    Login(e,p){

        let isValidated = false;
        isValidated = this.#validateEmail(e) && this.#validatePassword(p);

        if(isValidated){

            let res = false;
            let count = 0;

            admin.forEach(element => {

                if(e==element.email && p==element.password){
                    res = true;
                    count++;
                }
            })

            if(res == true && count>0){
                alert ("Logged In ");
                window.location.href = "dashboard.html"
            }

        }else{
            let x = this.#validateEmail(e);
            if(!x){
                alert ("Invalid Email ");
            }else{
                alert ("Your password must include atleast 8 characters or Invalid password ");
            }
        }
    }


    #validateEmail(e){

        return true; 
    }

    #validatePassword(p){

        if (p.length < 8) {
            return false;
        }else{
            return true;
        }
    }


    
}

let data ;

let login = () => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;


    data = new User(email,password);
    data.Login(email,password);

}


