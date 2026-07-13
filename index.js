function generatepassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_+=";
    
    let allowedchar="";
    let password="";

    allowedchar += includeLowercase?lowercaseChars:"";
    allowedchar += includeUppercase?uppercaseChars:"";
    allowedchar += includeNumbers?numberChars:"";
    allowedchar += includeSymbols?symbolChars:"";
    
    if(length<=0){
        return `(Password legnth must be at least 1)`;
    }
    if(allowedchar.length=== 0){
        return "Atleast one char set should be selected";
    }
    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedchar.length);
         password += allowedchar[randomIndex];
    }
    return password;
}




function generate(){

const passwordLength = document.getElementById("plength").value;
const includeLowercase = true;
const includeUppercase= true;
const includeNumbers = true;
const includeSymbols = true;
const passtext = document.getElementById("pass");

const password = generatepassword(passwordLength, includeLowercase, includeUppercase , includeNumbers, includeSymbols);
passtext.textContent=`Generated password is ${password}`;

}