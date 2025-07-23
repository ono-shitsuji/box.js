const passwordField = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', () => {
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;


  toggleButton.textContent = type === 'password' ? 'Show' : 'Hide';
});

document.addEventListener("DOMContentLoaded", function (){
    let myBtn = document.getElementById("myBtn");
    myBtn.addEventListener("click", function(){
        let inputPassword = document.getElementById("pass");
        
        console.log(inputPassword);
        console.log(inputPassword.type);

        if(inputPassword.type == "password"){
            inputPassword.type = "text";
        }else{
            inputPassword.type = "password";
        }
    })
});
