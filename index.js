const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("passwordOne")
let password2 = document.getElementById("passwordTwo") 

let passwordLength = 12;

function getCharacter(){
    let randomCharacter = Math.floor(Math.random() * characters.length);
    return characters[randomCharacter];
    
}

function getPassword(){
    let password = "";
    for(let i=0; i<passwordLength;i++){
        password += getCharacter();
    } 
    return password
}

function generatePass(){
    let generatedPassword = getPassword();

    password1.textContent = generatedPassword;
    password2.textContent = generatedPassword;
}

    




