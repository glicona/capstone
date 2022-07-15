function validate_register(){
    console.log('::::::: print information ::::::'+localStorage.getItem("glicona-username"));
    console.log('::::::: print information ::::::'+localStorage.getItem("glicona-password"));
    var firstName= document.getElementById("inputFirstname").value;
    var lastName= document.getElementById("inputLastname").value;
    var street= document.getElementById("inputStreet").value;
    var floor= document.getElementById("inputFloor").value;
    var city= document.getElementById("inputCity").value;
    var state= document.getElementById("inputState").value;
    document.getElementById("feedback-first-name").style.display =(firstName==="")?"block":"none";
    document.getElementById("feedback-last-name").style.display =(lastName==="")?"block":"none";
    document.getElementById("feedback-street").style.display =(street==="")?"block":"none";
    if( (firstName==="")&& (lastName==="")&&(street==="") ){
         console.log("That s is so bad");
    } else{
        $("#exampleModal").modal();
    }
}
function save_register(){
    var firstName= document.getElementById("inputFirstname").value;
    var lastName= document.getElementById("inputLastname").value;
    var street= document.getElementById("inputStreet").value;
    var floor= document.getElementById("inputFloor").value;
    var city= document.getElementById("inputCity").value;
    var state= document.getElementById("inputState").value;
    var username= document.getElementById("mod-username").value;
    var password= document.getElementById("mod-password").value;
 
     console.log("::::::: user name :::::: "+username.toLowerCase());

    localStorage.setItem(username.toLowerCase()+"-first-name",firstName);
    localStorage.setItem(username.toLowerCase()+"-last-name",lastName);
    localStorage.setItem(username.toLowerCase()+"-street",street);
    localStorage.setItem(username.toLowerCase()+"-floor",floor);
    localStorage.setItem(username.toLowerCase()+"-city",city);
    localStorage.setItem(username.toLowerCase()+"-state",state);
    localStorage.setItem(username.toLowerCase()+"-username",username);
    localStorage.setItem(username.toLowerCase()+"-password",password);
    console.log('::::::: print information ::::::'+localStorage.getItem(username.toLowerCase()+"-first-name"));
    $("#exampleModal").modal("hide");
}

