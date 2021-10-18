function checkForm(forma) {
    
    var firstNameValue = forma.firstName.value;
    var lastNameValue = forma.lastName.value;
    
    //Da li je firstName prazan
    if (firstNameValue === "") {
        alert("Greska: unesite nesto u polje ime!");
        forma.firstName.focus;
        return false;
        }
    
    //varijabla re - alfanumericki karakteri, underscore i space
    var re = /^[a-zA-Z]+$/;
    
    //varijable reN - regularni brojevi
    
    var reN = /^[0-9]*$/;
    
    
    //Da li firstName ima invalid karaktere
    if (!firstNameValue.match(re))
        alert("Input is not valid") ;
    else {
        alert("Forma je poslata") ;
    }
    
    //Da li je lastName prazan 
    if (lastNameValue === "") {
        alert("Greska: unesite nesto u polje prezime!"); 
        forma.lastName.focus;
        return false;
        }
    
    //Da li lastName ima invalid karatkere
     
    if (!lastNameValue.match(re))
        alert("Input is not valid")
    else {
        alert("Forma je poslata") ;
    }
    
    //Forma je validna
    return true;
    
}

function checkMessageForm(messageForm) {
    
    var firstNameValue = messageForm.ime.value;
    var lastNameValue = messageForm.prezime.value;
    var re = /^[a-zA-Z]+$/;
    var reN = /^[0-9]*$/;
    
}                             