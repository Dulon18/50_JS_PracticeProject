let password=document.getElementById("password");

 function genPass() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 10;
    let password = "";
 for (let i = 0; i <= passwordLength; i++) {

   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }

function copyPass() {
  let copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}
